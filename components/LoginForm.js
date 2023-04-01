import { Form } from "antd";
import { useState, useCallback } from "react";
import Link from "next/link";

const LoginForm = () => {
  cosnt[(id, setId)] = useState("");
  const [password, setPassword] = useState("");
  const onChageId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChagePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  return (
    <Form>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChage={onChageId} required />
      </div>
      <div>
        <label htmlFor="user-password">패스워드</label>
        <br />
        <Input
          name="user-password"
          value={id}
          type="password"
          onChage={onChagePassword}
          required
        />
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>{" "}
          </a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
