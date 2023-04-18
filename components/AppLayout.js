import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";
import { createGlobalStyle } from "styled-components";
import Router from "next/router";
import useInput from "./hooks/useInput";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;
const Global = createGlobalStyle`
  .ant-row{
    margin-right:0 !important;
    margin-left:0 !important ;
  }
  .ant-col:first-child{
    padding-left:0 !important ;

  }
  .ant-col:last-child{
    padding-right:0 !important ;
  }
`;

const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);
  const [searchInput, onChangeSearchInput] = useInput("");
  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);
  return (
    <div>
      <Global />
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>Sansbook</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput
            enterButton
            style={{ verticalAlign: "middle" }}
            value={searchInput}
            onChange={onChangeSearchInput}
            onSearch={onSearch}
          />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://github.com/mocakosan/sansbook"
            target="_blank"
            rel=" noreferrer noopener"
          >
            made by san
          </a>
        </Col>
      </Row>
    </div>
  );
};
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
