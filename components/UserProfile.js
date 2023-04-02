import { Avatar, Card, Button } from "antd";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          짹쨱
          <br />0
        </div>,
        <div key="following">
          팔로잉
          <br />0
        </div>,
        <div key="follower">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>JS</Avatar>} title="jangsan " />
      <Button onClick={onLogOut} style={{ marginLeft: 47 }}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
