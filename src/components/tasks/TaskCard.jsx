import { Link } from "react-router-dom";
import Button from "../Button";
const TaskCard = ({ tasks, handleDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-zinc-800 p-4 rounded-md h-40 overflow-hidden"
        >
          <header className="flex justify-between">
            <h3 className="text-lg font-bold line-clamp-1">{task.title}</h3>
            <div className="flex gap-x-2">
              <Link
                to={`/edit-task/${task.id}`}
                className="bg-zinc-600 hover:bg-zinc-500 cursor-pointer p-2 text-sm rounded-md self-center transition-colors duration-200"
              >
                Edit
              </Link>
              <Button color="red" onClick={() => handleDelete(task.id)}>
                Delete
              </Button>
            </div>
          </header>
          <p className="line-clamp-4">{task.description}</p>
        </div>
      ))}
    </>
  );
};

export default TaskCard;
