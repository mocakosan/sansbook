import React, { useCallback } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import useInput from "./hooks/useInput";
import { loginRequestAction } from "../reducers/user";

const LoginForm = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const dispatch = useDispatch();
  const { logInLoading } = useSelector((state) => state.user);

  //로그인 버튼을 누르면  onSubmitform에서 loginRequestAction실행 ->
  //Sagas/user.js 에서 login실행되고 동시에 reducer/user 에서 switch문에서 LOG_IN_REQUEST 실행
  const onSubmitForm = useCallback(() => {
    dispatch(
      loginRequestAction({
        email,
        password,
      })
    );
  }, [email, password]);

  return (
    <Form onFinish={onSubmitForm} style={{ padding: "10px" }}>
      <div>
        <label htmlFor="user-email">이메일</label>
        <br />
        <Input
          name="user-email"
          value={email}
          onChange={onChangeEmail}
          required
          type="email"
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          value={password}
          onChange={onChangePassword}
          type="password"
          required
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button type="primary" htmlType="submit" loading={logInLoading}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
