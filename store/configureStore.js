import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import reducer from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware([]))
      : composeWithDevTools(applyMiddleware([]));
  const store = createStore(reducer, enhancer);
  store.dispatch({
    type: "CHANGE_NICKNAME",
    data: "jangsan",
  });
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
