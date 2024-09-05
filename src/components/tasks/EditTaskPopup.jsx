import React, { useState, useEffect } from "react";
import Button from "../common/Button";

const colors = [
  { name: "Blue", value: "primary" },
  { name: "Mint", value: "mint" },
  { name: "Cream", value: "cream" },
  { name: "Accent", value: "accent" },
  { name: "Success", value: "success" },
  { name: "Highlight", value: "highlight" },
  { name: "Dark Gray", value: "dark-gray" },
  { name: "Pastel Yellow", value: "pastel-yellow" },
  { name: "Pastel Pink", value: "pastel-pink" },
  { name: "Pastel Purple", value: "pastel-purple" },
];

function EditTaskPopup({ task, onSave, onCancel }) {
  const [name, setName] = useState(task.name);
  const [category, setCategory] = useState(task.category);
  const [description, setDescription] = useState(task.description);
  const [color, setColor] = useState(task.color);

  useEffect(() => {
    setName(task.name);
    setCategory(task.category);
    setDescription(task.description);
    setColor(task.color);
  }, [task]);

  const handleSave = () => {
    onSave({ ...task, name, category, description, color });
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-futura-medium mb-4">Edit Task</h2>

        <div className="flex flex-col gap-4 mb-4">
          <div className="flex flex-col font-roboto">
            <label className="text-xs text-black mb-2">Task Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Task Name"
              className="text-sm p-2 border rounded-md"
            />
          </div>

          <div className="flex flex-col font-roboto">
            <label htmlFor="taskCategory" className="text-xs text-black mb-2">
              Category
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
              className="text-sm p-2 border rounded-md"
            />
          </div>

          <div className="flex flex-col font-roboto">
            <label className="text-xs text-black mb-2">Description</label>
          </div>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="text-sm p-2 border rounded-md"
          />

          <div className="flex flex-col font-roboto">
            <label htmlFor="taskColor" className="text-xs text-black mb-2">
              Color
            </label>
            <select
              id="taskColor"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="text-sm p-2 border rounded-md"
            >
              {colors.map((color) => (
                <option key={color.value} value={color.value}>
                  {color.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button onClick={handleSave} color="blue">
            Save
          </Button>
          <Button onClick={onCancel} color="red">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditTaskPopup;
