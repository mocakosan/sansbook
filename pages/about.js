import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Router from "next/router";
import { LOAD_USER_REQUEST } from "../reducers/user";
import { END } from "redux-saga";
import wrapper from "../store/configureStore";
import { Card, Avatar } from "antd";

const About = () => {
  const { userInfo } = useSelector((state) => state.user);
  console.log(userInfo);
  return (
    <>
      <AppLayout>
        <Head>
          <title>내프로필 | Sansbook </title>
        </Head>
        {userInfo ? (
          <Card
            actions={[
              <div key="twit">
                게시물
                <br />
                {userInfo.Posts}
              </div>,
              <div key="following">
                팔로잉
                <br />
                {userInfo.Followings.length}
              </div>,
              <div key="follower">
                팔로워
                <br />
                {userInfo.Followers.length}
              </div>,
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
              title={userInfo.nickname}
              description="sansbook development"
            />
          </Card>
        ) : null}
      </AppLayout>
    </>
  );
};

//SSR : next전용 서버사이드 렌더링 = 사용
export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  console.log("getStaticProps");
  store.dispatch({
    type: LOAD_USER_REQUEST,
    data: 2,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default About;
