import React from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";
import { END } from "redux-saga";

import axios from "axios";
import { LOAD_POST_REQUEST } from "../../reducers/post";
import wrapper from "../../store/configureStore";
import PostCard from "../../components/PostCard";
import AppLayout from "../../components/AppLayout";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";

const Post = () => {
  const { singlePost } = useSelector((state) => state.post);
  const router = useRouter();
  const { id } = router.query;

  // if (router.isFallback) {
  //   return <div>Loading...</div>
  // }

  return (
    <AppLayout>
      <Head>
        <title>
          {singlePost?.user.nickname}
          님의 글
        </title>

        <meta name="description" content={singlePost?.content} />
        <meta
          property="og:title"
          content={`${singlePost?.user.nickname}님의 게시글`}
        />
        <meta property="og:description" content={singlePost?.content} />
        <meta
          property="og:image"
          content={
            singlePost?.Images[0]
              ? singlePost?.Images[0].src
              : "https://nodebird.com/favicon.ico"
          }
        />
        <meta property="og:url" content={`https://nodebird.com/post/${id}`} />
      </Head>
      <PostCard post={singlePost} />
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
    store.dispatch({
      type: LOAD_POST_REQUEST,
      data: context.params.id,
    });
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return { props: {} };
  }
);

export default Post;
