import React, { useState } from "react";
import TaskCard from "./TaskCard";
import Button from "../common/Button";

function TaskList({
  tasks,
  currentTask,
  onStartTask,
  onCompleteTask,
  onEditTask,
  onDeleteTasks,
}) {
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleSelectTask = (task) => {
    setSelectedTasks((prevSelected) =>
      prevSelected.includes(task)
        ? prevSelected.filter((t) => t !== task)
        : [...prevSelected, task]
    );
  };

  return (
    <section className="w-full p-[30px] rounded-lg shadow-md">
      <h2 className="text-2xl font-futura-medium mb-4">Your Tasks</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task, index) => (
          <div key={index} className="relative">
            <input
              type="checkbox"
              checked={selectedTasks.includes(task)}
              onChange={() => handleSelectTask(task)}
              className="absolute top-2 right-2"
            />
            <TaskCard
              task={task}
              isCurrentTask={currentTask === task}
              onStart={() => onStartTask(task)}
              onComplete={() => onCompleteTask(task)}
              onEdit={() => onEditTask(task)}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end mt-4">
        <Button onClick={() => onDeleteTasks(selectedTasks)} color="red">
          Delete
        </Button>
      </div>
    </section>
  );
}

export default TaskList;
