const dummyUser = {
  id: 1,
  nickname: "jangsan",
  Posts: [],
  Followings: [],
  Followers: [],
};

export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};
export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};
export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN": {
      return {
        ...state,
        isLoggedIn: true,
        me: dummyUser,
        loginData: action.data,
      };
    }
    case "LOG_OUT": {
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    }
    case "SIGN_UP": {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
