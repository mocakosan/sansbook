import "antd/dist/antd.css";
import PropTypes from "prop-types";
import Head from "next/head";
import wrapper from "../store/configureStore";

const Sansbook = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Sansbook </title>
      </Head>
      <Component />
    </>
  );
};

Sansbook.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(Sansbook);
