import React from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks, currentTask, onStartTask, onCompleteTask }) {
  return (
    <section>
      <h2 className="text-2xl font-futura-medium mb-4">Your Tasks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            isCurrentTask={currentTask === task}
            onStart={() => onStartTask(task)}
            onComplete={() => onCompleteTask(task)}
          />
        ))}
      </div>
    </section>
  );
}

export default TaskList;
