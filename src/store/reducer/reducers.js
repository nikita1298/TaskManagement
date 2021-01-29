import * as actionTypes from "../actions/actionTypes";
import Task from "../../Data/Task";

const initialState = {
  tasks: Task,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case actionTypes.EDIT_TASK:
      let { edttask } = action.payload;
      let tempTasks = [...state.blogs];
      // tempTasks[index] = { ...edttask };
      console.log("tempTasks", tempTasks);
      return { ...state, tasks: tempTasks };

    // case actionTypes.DELETE_TASK:
    //   let bid = action.payload;
    //   let blogs = [...state.blogs];
    //   let blog = blogs.filter((item) => item.id !== bid);
    //   return { ...state, blogs: blog };

    default:
      return state;
  }
};

export default reducer;
