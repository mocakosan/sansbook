import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "제로초" },
    { nickname: "바보" },
    { nickname: "sansbook" },
  ];
  const followingList = [
    { nickname: "제로초" },
    { nickname: "바보" },
    { nickname: "sansbook" },
  ];
  return (
    <>
      <Head>
        <title>내프로필 | Sansbook </title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
