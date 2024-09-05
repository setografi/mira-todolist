import React, { useState, useEffect } from "react";
import Sidebar from "../components/layout/Sidebar";
import About from "../components/layout/About";
import ProgressBar from "../components/progress/ProgressBar";
import LevelInfo from "../components/progress/LevelInfo";
import AddTaskForm from "../components/tasks/AddTaskForm";
import EditTaskPopup from "../components/tasks/EditTaskPopup";
import TaskList from "../components/tasks/TaskList";
import Achievements from "../components/achievements/Achievements";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { calculateNewXpAndLevel } from "../utils/xpCalculations";
import { checkAchievements } from "../utils/achievementUtils";

function HomePage() {
  const [tasks, setTasks] = useLocalStorage("mira_tasks", []);
  const [editingTask, setEditingTask] = useState(null);
  const [currentTask, setCurrentTask] = useState(null);
  const [xp, setXp] = useLocalStorage("mira_xp", 0);
  const [level, setLevel] = useLocalStorage("mira_level", 1);
  const [xpPerLevel, setXpPerLevel] = useState(100);
  const [newAchievement, setNewAchievement] = useState(null);
  const [showAchievement, setShowAchievement] = useState(false);
  const [activeSection, setActiveSection] = useState("tasks");

  useEffect(() => {
    let timer;
    if (currentTask) {
      timer = setInterval(() => {
        const { newXp, newLevel, xpPerLevel } = calculateNewXpAndLevel(
          xp,
          level
        );
        setXp(newXp);
        setLevel(newLevel);
        setXpPerLevel(xpPerLevel);

        const achievementCheck = checkAchievements(level, xp, tasks);
        const achievements = achievementCheck
          ? achievementCheck.achievements
          : [];

        if (achievements.length > 0) {
          setNewAchievement({
            message: achievementCheck.message,
            achievements,
          });
          setShowAchievement(true);

          // Hide the achievement after 3 seconds
          setTimeout(() => {
            setShowAchievement(false);
            setNewAchievement(null);
          }, 3000);
        } else {
          setNewAchievement(null);
          setShowAchievement(false);
        }
      }, 60000);
    }
    return () => clearInterval(timer);
  }, [currentTask, xp, level]);

  const addTask = (newTask) => {
    if (editingTask) {
      setTasks(
        tasks.map((task) =>
          task === editingTask
            ? { ...newTask, completed: task.completed }
            : task
        )
      );
      setEditingTask(null);
    } else {
      setTasks([...tasks, { ...newTask, completed: false }]);
    }
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

  const editTask = (taskToEdit) => {
    setEditingTask(taskToEdit);
  };

  const handleSaveTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task === editingTask ? updatedTask : task)));
    setEditingTask(null);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const deleteTasks = (tasksToDelete) => {
    setTasks(tasks.filter((task) => !tasksToDelete.includes(task)));
    // setSelectedTasks([]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-roboto">
      <div className="flex-col md:flex-row container mx-auto p-4 flex gap-6">
        <Sidebar setActiveSection={setActiveSection} />

        <main className="flex flex-col w-full gap-6">
          {showAchievement && newAchievement && (
            <div className="bg-success text-white p-4 rounded-lg mb-4 shadow">
              <p>You unlocked a new achievement: {newAchievement.message}!</p>
            </div>
          )}

          {activeSection === "tasks" && (
            <>
              <section className="gradient-bg text-black p-[30px] md:h-[23rem] lg:h-[200px] w-full rounded-lg shadow-md">
                <h2 className="text-2xl font-futura-medium mb-[31px]">
                  Your Progress
                </h2>
                <div className="flex flex-col gap-2">
                  <LevelInfo level={level} xp={xp} xpPerLevel={xpPerLevel} />
                  <ProgressBar xp={xp} level={level} />
                </div>
              </section>

              <AddTaskForm onAddTask={addTask} />
              <TaskList
                tasks={tasks}
                currentTask={currentTask}
                onStartTask={startTask}
                onCompleteTask={completeTask}
                onEditTask={editTask}
                onDeleteTasks={deleteTasks}
              />
            </>
          )}

          {activeSection === "achievements" && (
            <Achievements level={level} xp={xp} tasks={tasks} />
          )}

          {activeSection === "profile" && (
            <div className="w-full p-[30px] rounded-lg shadow-md">
              Coming Soon!
            </div>
          )}

          {activeSection === "about" && <About />}
        </main>

        {editingTask && (
          <EditTaskPopup
            task={editingTask}
            onSave={handleSaveTask}
            onCancel={handleCancelEdit}
          />
        )}
      </div>
    </div>
  );
}

export default HomePage;
