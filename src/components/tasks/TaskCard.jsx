import React from "react";
import Button from "../common/Button";

const colorClasses = {
  primary: "bg-primary",
  mint: "bg-mint",
  cream: "bg-cream",
  accent: "bg-accent",
  success: "bg-success",
  highlight: "bg-highlight",
  "dark-gray": "bg-dark-gray",
  "pastel-yellow": "bg-pastel-yellow",
  "pastel-pink": "bg-pastel-pink",
  "pastel-purple": "bg-pastel-purple",
};

function TaskCard({ task, isCurrentTask, onStart, onComplete, onEdit }) {
  return (
    <div className={`p-4 rounded-lg shadow-md ${colorClasses[task.color]}`}>
      <div className="mb-4">
        <h3 className="text-black font-roboto font-bold mb-2">{task.name}</h3>
        <p className="text-xs text-black font-roboto mb-1">{task.category}</p>
        <p className="text-sm text-black font-roboto">{task.description}</p>
      </div>

      <div className="flex flex-col md:flex-row justify-end gap-2 md:gap-4">
        {task.completed ? (
          <span className="bg-success text-white font-roboto px-4 py-2 rounded flex items-center justify-center">
            Completed
          </span>
        ) : isCurrentTask ? (
          <Button onClick={onComplete} color="green">
            Complete
          </Button>
        ) : (
          <Button onClick={onStart} color="blue">
            Start
          </Button>
        )}
        <Button onClick={() => onEdit(task)} color="blue">
          Edit
        </Button>
      </div>
    </div>
  );
}

export default TaskCard;
