import * as type from "../types/task";

const initialStateTask = {
  tasks: [],
  error: "",
  isLoading: false,
  isFetching: false,
  task: {},
};

export const taskReducer = (state = initialStateTask, action) => {
  switch (action.type) {
    case type.GET_TASKS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case type.GET_TASKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        tasks: action.payload,
      };
    case type.GET_TASKS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case type.UPDATE_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case type.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: state.tasks.map((form) =>
          form.id === action.payload.id
            ? {
                ...form,
                title: action.payload.title,
                description: action.payload.description,
                completed: action.payload.completed,
                selected: action.payload.selected,
              }
            : form
        ),
      };
    case type.UPDATE_TASK_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case type.DELETE_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case type.DELETE_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: state.tasks.filter((item) => item.id !== action.payload.id),
      };
    case type.DELETE_TASK_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case type.CREATE_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case type.CREATE_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: [...state.tasks, action.payload],
      };
    case type.CREATE_TASK_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
