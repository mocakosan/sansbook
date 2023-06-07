import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import useInput from "../components/hooks/useInput";
import styled from "styled-components";
import { Form, Input, Checkbox, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST } from "../reducers/user";
import Router from "next/router";
import { END } from "redux-saga";
import wrapper from "../store/configureStore";
import axios from "axios";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError, me } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    //로그인시 홈으로 이동
    if (me && me.id) {
      Router.replace("/");
    }
  }, [me && me.id]);
  useEffect(() => {
    //회원가입 후 홈으로 이동
    if (signUpDone) {
      Router.replace("/");
    }
  }, [signUpDone]);
  useEffect(() => {
    if (signUpError) {
      alert(signUpError); // 이미 사용중인 아이디입니다 에러창
    }
  }, [signUpError]);
  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [PasswordCheck, setPasswordCheck] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState("");
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const onSubmit = useCallback(() => {
    if (password !== PasswordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }

    //console.log(email, nickname, password);
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    });
  }, [email, password, PasswordCheck, term]);
  return (
    <AppLayout>
      <Head>
        <title>회원가입 | Sansbook </title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input
            name="user-email"
            type="email"
            value={email}
            required
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input
            name="user-nick"
            value={nickname}
            required
            onChange={onChangeNickname}
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호 체크</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={PasswordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {PasswordError && (
            <ErrorMessage style={{ color: "red" }}>
              비밀번호가 일치하지 않습니다
            </ErrorMessage>
          )}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            약관동의
          </Checkbox>
          {termError && (
            <ErrorMessage style={{ color: "red" }}>
              약관에 동의하셔야합니다
            </ErrorMessage>
          )}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>
            가입하기
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

//SSR : next전용 서버사이드 렌더링 = 사용
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = cookie;
    if (context.req && cookie) {
      //쿠키를 써서 요청을 보냈을떄만 잠시 보관해두었다가 쿠키 안써서 요청보낼떄는 서버에서 공유하고 있는 쿠키를 제거하는
      axios.defaults.headers.Cookie = cookie; //잘못하면 내 뒤로 로그인하는 사람이 내쿠키를 공유해서 내정보로 로그인하는 현상이 일어나서 해두는 조치
    }
    store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

export default Signup;
