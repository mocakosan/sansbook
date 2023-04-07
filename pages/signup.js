import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { useCallback, useState } from "react";
import useInput from "../components/hooks/useInput";
import styled from "styled-components";
import { Form, Input, Checkbox, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST } from "../reducers/user";

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading } = useSelector((state) => state.user);
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

    console.log(email, nickname, password);
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

export default Signup;
