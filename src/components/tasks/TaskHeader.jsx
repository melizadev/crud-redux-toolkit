import { Link } from "react-router-dom";
const TaskHeader = ({ tasks }) => {
  return (
    <header className="flex justify-between items-center py-4">
      <h2 className="text-sm font-bold border border-gray-400 rounded-md p-2">
        Tasks: {tasks.length}
      </h2>
      <Link
        to="/create-task"
        className="bg-indigo-600 hover:bg-indigo-500 transition-colors duration-200 p-2 rounded-md text-sm font-medium shadow-sm"
      >
        Create Task
      </Link>
    </header>
  );
};

export default TaskHeader;
