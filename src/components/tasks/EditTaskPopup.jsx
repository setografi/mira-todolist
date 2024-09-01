import React, { useState, useEffect } from "react";
import Button from "../common/Button";

function EditTaskPopup({ task, onSave, onCancel }) {
  const [name, setName] = useState(task.name);
  const [category, setCategory] = useState(task.category);
  const [description, setDescription] = useState(task.description);

  useEffect(() => {
    setName(task.name);
    setCategory(task.category);
    setDescription(task.description);
  }, [task]);

  const handleSave = () => {
    onSave({ ...task, name, category, description });
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-futura-medium mb-4">Edit Task</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Task Name"
          className="border p-2 rounded w-full mb-4"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          className="border p-2 rounded w-full mb-4"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border p-2 rounded w-full mb-4"
        />
        <div className="flex justify-end gap-2">
          <Button onClick={handleSave} color="blue">
            Save
          </Button>
          <Button onClick={onCancel} color="blue">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditTaskPopup;
