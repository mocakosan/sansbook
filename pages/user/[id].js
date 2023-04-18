import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Card } from "antd";
import { END } from "redux-saga";
import Head from "next/head";
import { useRouter } from "next/router";

import axios from "axios";
import { LOAD_USER_POSTS_REQUEST } from "../../reducers/post";
import { LOAD_MY_INFO_REQUEST, LOAD_USER_REQUEST } from "../../reducers/user";
import PostCard from "../../components/PostCard";
import wrapper from "../../store/configureStore";
import AppLayout from "../../components/AppLayout";

const User = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { mainPosts, hasMorePosts, loadUserPostsLoading } = useSelector(
    (state) => state.post
  );
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.pageYOffset + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !loadUserPostsLoading) {
          dispatch({
            type: LOAD_USER_POSTS_REQUEST,
            lastId:
              mainPosts[mainPosts.length - 1] &&
              mainPosts[mainPosts.length - 1].id,
            data: id,
          });
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [mainPosts.length, hasMorePosts, id]);

  return (
    <AppLayout>
      {userInfo && (
        <Head>
          <title>
            {userInfo.nickname}
            님의 글
          </title>
          <meta
            name="description"
            content={`${userInfo.nickname}님의 게시글`}
          />
          <meta
            property="og:title"
            content={`${userInfo.nickname}님의 게시글`}
          />
          <meta
            property="og:description"
            content={`${userInfo.nickname}님의 게시글`}
          />
          <meta
            property="og:image"
            content="https://nodebird.com/favicon.ico"
          />
          <meta property="og:url" content={`https://nodebird.com/user/${id}`} />
        </Head>
      )}
      {userInfo ? (
        <Card
          actions={[
            <div key="twit">
              짹짹
              <br />
              {userInfo?.Posts}
            </div>,
            <div key="following">
              팔로잉
              <br />
              {userInfo?.Followings}
            </div>,
            <div key="follower">
              팔로워
              <br />
              {userInfo?.Followers}
            </div>,
          ]}
        >
          <Card.Meta
            avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
            title={userInfo.nickname}
          />
        </Card>
      ) : null}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

//SSR : next전용 서버사이드 렌더링 = 사용
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      //쿠키를 써서 요청을 보냈을떄만 잠시 보관해두었다가 쿠키 안써서 요청보낼떄는 서버에서 공유하고 있는 쿠키를 제거하는
      axios.defaults.headers.Cookie = cookie; //잘못하면 내 뒤로 로그인하는 사람이 내쿠키를 공유해서 내정보로 로그인하는 현상이 일어나서 해두는 조치
    }
    store.dispatch({
      type: LOAD_USER_POSTS_REQUEST,
      data: context.params.id,
    });
    store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    store.dispatch({
      type: LOAD_USER_REQUEST,
      data: context.params.id,
    });

    store.dispatch(END);
    await store.sagaTask.toPromise();
    return { props: {} };
  }
);

export default User;
