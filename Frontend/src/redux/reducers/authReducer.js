import * as type from "../types/auth";

const initialStateAuth = {
  user: {},
  error: "",
  isLoading: false,
  isLogin: false,
  isFetching: false,
  message: "",
  users: [],
};

export const authReducer = (state = initialStateAuth, action) => {
  switch (action.type) {
    case type.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
        message: "",
      };
    case type.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        isLogin: action.payload.auth,
        message: action.payload.message,
        error: "",
      };
    case type.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        user: {},
      };
    case type.SET_LOGOUT:
      return {
        ...state,
        message: "Você saiu da sua conta.",
        user: {},
        isLogin: false,
      };
    case type.CREATE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case type.CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: "Login realizado com sucesso.",
      };
    case type.CREATE_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
