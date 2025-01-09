import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../features/projectSlice";
import taskReducer from "../features/taskSlice";
import selectReducer from "../features/selectedItemsSlice";
const store = configureStore({
  reducer: {
    project: projectReducer,
    task: taskReducer,
    selected: selectReducer,
  },
});

export default store;
