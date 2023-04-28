import { Button } from "antd";
import PropTypes from "prop-types";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from "../reducers/user";

const FollowButton = ({ post }) => {
  const dispatch = useDispatch();
  const { me, followLoading, unfollowLoading } = useSelector(
    (state) => state.User
  );

  const isFollowing = me?.Followings.find((v) => v.id === post.user?.id);
  const onClickButton = useCallback(() => {
    if (isFollowing) {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: post.user.id,
      });
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: post.user.id,
      });
    }
  }, [isFollowing]);
  if (post.user?.id === me?.id) {
    return null;
  }
  return (
    <Button loading={followLoading || unfollowLoading} onClick={onClickButton}>
      {isFollowing ? "언팔로우" : "팔로우"}
    </Button>
  );
};

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
};

export default FollowButton;
