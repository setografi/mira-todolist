import React, { useState, useEffect } from "react";
import Sidebar from "../components/layout/Sidebar";
import ProgressBar from "../components/progress/ProgressBar";
import LevelInfo from "../components/progress/LevelInfo";
import AddTaskForm from "../components/tasks/AddTaskForm";
import TaskList from "../components/tasks/TaskList";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { calculateNewXpAndLevel } from "../utils/xpCalculations";

function HomePage() {
  const [tasks, setTasks] = useLocalStorage("mira_tasks", []);
  const [currentTask, setCurrentTask] = useState(null);
  const [xp, setXp] = useLocalStorage("mira_xp", 0);
  const [level, setLevel] = useLocalStorage("mira_level", 1);

  useEffect(() => {
    let timer;
    if (currentTask) {
      timer = setInterval(() => {
        const { newXp, newLevel } = calculateNewXpAndLevel(xp, level);
        setXp(newXp);
        setLevel(newLevel);
      }, 60000); // Increase XP every minute
    }
    return () => clearInterval(timer);
  }, [currentTask, xp, level]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, completed: false }]);
  };

  const startTask = (task) => {
    setCurrentTask(task);
  };

  const completeTask = (taskToComplete) => {
    setTasks(
      tasks.map((task) =>
        task === taskToComplete ? { ...task, completed: true } : task
      )
    );
    setCurrentTask(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-roboto">
      <div className="flex-grow container mx-auto p-4 flex">
        <Sidebar />

        <main className="w-3/4">
          <section className="mb-8 bg-blue-100 p-4 rounded-lg">
            <h2 className="text-2xl font-futura-medium mb-4">Your Progress</h2>
            <LevelInfo level={level} xp={xp} />
            <ProgressBar xp={xp} level={level} />
          </section>
          <AddTaskForm onAddTask={addTask} />
          <TaskList
            tasks={tasks}
            currentTask={currentTask}
            onStartTask={startTask}
            onCompleteTask={completeTask}
          />
        </main>
      </div>
    </div>
  );
}

export default HomePage;
