import useTaskList from "../../hooks/useTaskList.jsx";
import TaskCard from "./TaskCard.jsx";
import Pagination from "../Pagination.jsx";
import TaskHeader from "./TaskHeader.jsx";
const TasksList = () => {
  const {
    tasks,
    handleDelete,
    currentPage,
    setCurrentPage,
    totalPages,
    currentTasks,
  } = useTaskList();
  return (
    <div className="w-full sm:w-5/6 md:w-4/6 lg:w-4/6 px-4 mx-auto">
      <section>
        <TaskHeader tasks={tasks} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TaskCard tasks={currentTasks} handleDelete={handleDelete} />
        </div>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </section>
    </div>
  );
};
export default TasksList;
