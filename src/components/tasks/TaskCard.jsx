import React from "react";
import Button from "../common/Button";

function TaskCard({ task, isCurrentTask, onStart, onComplete }) {
  return (
    <div className="bg-mint-100 p-4 rounded-lg shadow">
      <h3 className="font-roboto font-bold">{task.name}</h3>
      <p className="text-sm text-gray-600 font-roboto">{task.category}</p>
      {task.completed ? (
        <span className="text-green-500 font-roboto">Completed</span>
      ) : isCurrentTask ? (
        <Button onClick={onComplete} color="green">
          Complete
        </Button>
      ) : (
        <Button onClick={onStart} color="blue">
          Start
        </Button>
      )}
    </div>
  );
}

export default TaskCard;
