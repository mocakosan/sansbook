import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import { useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import Router from "next/router";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import useSWR from "swr";
import axios from "axios";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import { backUrl } from "../components/config/config";

const fetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((result) => result.data);

const Chat = () => {
  const { me } = useSelector((state) => state.user);
  const [followingsLimit, setFollowingsLimit] = useState(3);
  const [followersLimit, setFollowersLimit] = useState(3);
  const { data: followersData, error: followerError } = useSWR(
    `${backUrl}/user/followers?limit=${followersLimit}`,
    fetcher
  );
  const { data: followingsData, error: followingError } = useSWR(
    `${backUrl}/user/followings?limit=${followingsLimit}`,
    fetcher
  );

  // useEffect(() => { //swr사용 안할시에
  //   dispatch({
  //     type: LOAD_FOLLOWINGS_REQUEST,
  //   });
  //   dispatch({
  //     type: LOAD_FOLLOWERS_REQUEST,
  //   });
  // }, []);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push("/");
    }
  }, [me && me.id]);

  const loadMoreFollowers = useCallback(() => {
    setFollowersLimit((prev) => prev + 3);
  }, []);

  const loadMoreFollowings = useCallback(() => {
    setFollowingsLimit((prev) => prev + 3);
  }, []);

  if (!me) {
    return "내정보 로딩중";
  }

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return "팔로잉/팔로워 로딩 중 에러가 발생했습니다.";
  }

  return (
    <>
      <Head>
        <title>Chat | Sansbook </title>
      </Head>
      <AppLayout>
        <FollowList
          header="친구 목록"
          data={followingsData}
          onClickMore={loadMoreFollowings}
          loading={!followingError && !followingsData}
        />
      </AppLayout>
    </>
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

    store.dispatch(END);
    await store.sagaTask.toPromise();
    return { props: {} };
  }
);

export default Chat;
