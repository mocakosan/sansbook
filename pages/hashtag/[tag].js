import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { END } from "redux-saga";

import axios from "axios";
import { LOAD_HASHTAG_POSTS_REQUEST } from "../../reducers/post";
import PostCard from "../../components/PostCard";
import wrapper from "../../store/configureStore";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import AppLayout from "../../components/AppLayout";

const Hashtag = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { tag } = router.query;
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    const onScroll = () => {
      if (
        window.pageYOffset + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_HASHTAG_POSTS_REQUEST,
            lastId:
              mainPosts[mainPosts.length - 1] &&
              mainPosts[mainPosts.length - 1].id,
            data: tag,
          });
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [mainPosts.length, hasMorePosts, tag]);

  return (
    <AppLayout>
      {mainPosts.map((c) => (
        <PostCard key={c.id} post={c} />
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
      type: LOAD_MY_INFO_REQUEST,
    });
    store.dispatch({
      type: LOAD_HASHTAG_POSTS_REQUEST,
      data: context.params.tag,
    });

    store.dispatch(END);
    await store.sagaTask.toPromise();
    return { props: {} };
  }
);

export default Hashtag;
