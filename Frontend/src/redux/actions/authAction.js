import * as type from "../types/auth";

const apiUrl = "http://localhost:3333";

export const login = (formLogin) => async (dispatch) => {
  dispatch({
    type: type.LOGIN_REQUEST,
  });

  try {
    const response = await fetch(apiUrl + "/login", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(formLogin),
    });
    const result = await response.json();
    console.log(result);

    dispatch({
      type: type.LOGIN_SUCCESS,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: type.LOGIN_FAILED,
      payload: error,
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: type.SET_LOGOUT,
  });
};

export const registerUser = (formUser) => async (dispatch) => {
  dispatch({
    type: type.CREATE_USER_REQUEST,
  });

  try {
    const response = await fetch(apiUrl + "/user", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(formUser),
    });
    const result = await response.json();

    dispatch({
      type: type.CREATE_USER_SUCCESS,
      payload: result,
    });
    navigation.navigate("Login");
  } catch (error) {
    dispatch({
      type: type.CREATE_USER_FAILED,
      payload: error,
    });
  }
};
