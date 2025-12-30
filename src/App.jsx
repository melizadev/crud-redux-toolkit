import "./App.css";
import TaskForm from "./components/tasks/TaskForm.jsx";
import TasksList from "./components/tasks/TasksList.jsx";
import Header from "./components/Header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <main className="bg-zinc-900 text-white">
      <div className="flex flex-col items-center justify-start min-h-screen h-full w-full p-4">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TasksList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}
export default App;
