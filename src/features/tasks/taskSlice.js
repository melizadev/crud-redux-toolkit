import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../utils/localStorage";
const initialState = loadState() || [];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      console.log(state);
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
      }
    },
  },
});
export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
