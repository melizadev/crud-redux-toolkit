import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice.js";
import { saveState } from "../utils/localStorage";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
store.subscribe(() => {
  saveState(store.getState().tasks);
});
