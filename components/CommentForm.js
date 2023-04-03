import { Button, Form, Input } from "antd";
import { useCallback } from "react";
import useInput from "./hooks/useInput";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, onChaneCommentText] = useInput("");
  const onSubmitComment = useCallback(() => {}, [commentText]);
  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: "relative" }}>
        <Input.TextArea
          value={commentText}
          onChange={onChaneCommentText}
          rows={4}
        />
        <Button
          type="primary"
          htmlfor="submit"
          style={{ position: "absolute", right: 0, bottom: -40 }}
        >
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
