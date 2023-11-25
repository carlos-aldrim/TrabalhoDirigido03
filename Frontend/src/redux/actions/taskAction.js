import * as type from "../types/task";

const apiUrl = "http://localhost:3333";

export const getTasks = () => async (dispatch) => {
  dispatch({
    type: type.GET_TASKS_REQUEST,
  });

  try {
    const response = await fetch(apiUrl + "/tasks", {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    const result = await response.json();
    dispatch({
      type: type.GET_TASKS_SUCCESS,
      payload: [...result],
    });
  } catch (error) {
    dispatch({
      type: type.GET_TASKS_FAILED,
      payload: error,
    });
  }
};

export const updateTask = (formUpdate) => async (dispatch) => {
  dispatch({
    type: type.UPDATE_TASK_REQUEST,
  });
  try {
    const response = await fetch(apiUrl + "/task", {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(formUpdate),
    });
    const result = await response.json();
    dispatch({
      type: type.UPDATE_TASK_SUCCESS,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: type.UPDATE_TASK_FAILED,
      payload: error,
    });
  }
};

export const removeTask = (id) => async (dispatch) => {
  dispatch({
    type: type.DELETE_TASK_REQUEST,
  });
  try {
    const response = await fetch(apiUrl + "/task?id=" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    const result = await response.json();
    dispatch({
      type: type.DELETE_TASK_SUCCESS,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: type.DELETE_TASK_FAILED,
      payload: error,
    });
  }
};

export const addTask = (form) => async (dispatch) => {
  dispatch({
    type: type.CREATE_TASK_REQUEST,
  });
  try {
    const response = await fetch(apiUrl + "/task", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(form),
    });
    const result = await response.json();

    dispatch({
      type: type.CREATE_TASK_SUCCESS,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: type.CREATE_TASK_FAILED,
      payload: error,
    });
  }
};
