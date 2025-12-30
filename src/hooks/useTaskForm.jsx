import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import capitalizeFirstLetter from "../utils/capitilize";

const useTaskForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      title: capitalizeFirstLetter(data.title),
      description: capitalizeFirstLetter(data.description),
    };

    if (params.id) {
      dispatch(editTask({ ...formattedData, id: params.id }));
    } else {
      dispatch(
        addTask({
          ...formattedData,
          id: uuid(),
        })
      );
    }

    navigate("/task-flow/");
  };

  useEffect(() => {
    if (params.id) {
      const task = tasks.find((task) => task.id === params.id);
      if (task) {
        setValue("title", task.title);
        setValue("description", task.description);
      } else {
        console.error(`Task with id ${params.id} not found`);
      }
    }
  }, [params.id, tasks, setValue]);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") navigate("/task-flow/");
    };
    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [navigate]);

  return { register, handleSubmit, onSubmit, isSubmitting };
};
export default useTaskForm;
