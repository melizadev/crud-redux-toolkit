import useTaskForm from "../../hooks/useTaskForm";
import Button from "../Button";

const TaskForm = () => {
  const { register, handleSubmit, onSubmit, isSubmitting } = useTaskForm();
  return (
    <div className="w-full h-[77vh] pt-10 flex items-start justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-zinc-800 max-w-[350px] w-full min-h-80 p-4 rounded-md"
      >
        <label className="block font-bold text-xs mb-2">Task:</label>
        <input
          {...register("title", { required: true })}
          placeholder="title"
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        />

        <label className="block font-bold text-xs mb-2">Description:</label>
        <textarea
          {...register("description", { required: true })}
          placeholder="description"
          className="w-full h-40 p-2 rounded-md bg-zinc-600 mb-2"
        />

        <div className="flex gap-2 justify-end">
          <Button type="submit" disabled={isSubmitting} color="indigo">
            Save
          </Button>

          <Button
            type="button"
            onClick={() => window.history.back()}
            color="gray"
          >
            Return
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
