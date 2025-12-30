import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { useState } from "react";
const TASKS_PER_PAGE = 6;
const useTaskList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  const totalPages = Math.ceil(tasks.length / TASKS_PER_PAGE);
  const startIndex = (currentPage - 1) * TASKS_PER_PAGE;

  return {
    tasks,
    handleDelete,
    totalPages,
    currentTasks: tasks.slice(startIndex, startIndex + TASKS_PER_PAGE),
    setCurrentPage,
  };
};

export default useTaskList;
