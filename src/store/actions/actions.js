import * as actionTypes from "../actions/actionTypes";

export const addTaskDispatch = (task) => {
  console.log("object", task);
  return {
    type: actionTypes.ADD_TASK,
    payload: task,
  };
};

export const addTask = (data) => {
  return (dispatch) => {
    dispatch(addTaskDispatch(data));
  };
};

export const editTaskDispatch = (task) => {
  console.log("object", task);
  return {
    type: actionTypes.EDIT_TASK,
    payload: { edtTask: task },
  };
};

export const editTask = (data) => {
  return (dispatch) => {
    dispatch(editTaskDispatch(data));
  };
};

export const deleteTaskDispatch = (id) => {
  return {
    type: actionTypes.DELETE_TASK,
    payload: id,
  };
};

export const deleteTask = (id) => {
  return (dispatch) => {
    dispatch(deleteTaskDispatch(id));
  };
};
