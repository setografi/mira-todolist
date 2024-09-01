import React from "react";
import Button from "../common/Button";

function TaskCard({ task, isCurrentTask, onStart, onComplete, onEdit }) {
  return (
    <div className="p-4 rounded-lg shadow">
      <div className="mb-4">
        <h3 className="font-roboto font-bold mb-2">{task.name}</h3>
        <p className="text-sm text-gray-600 font-roboto mb-1">
          {task.category}
        </p>
        <p className="text-sm text-gray-800 font-roboto">{task.description}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
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
        <Button onClick={() => onEdit(task)} color="blue">
          Edit
        </Button>
      </div>
    </div>
  );
}

export default TaskCard;
