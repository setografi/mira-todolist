import React, { useState } from "react";
import Button from "../common/Button";
import { Plus } from "lucide-react";

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

function AddTaskForm({ onAddTask }) {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [selectedColor, setSelectedColor] = useState("primary");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskName && newTaskCategory) {
      onAddTask({
        name: newTaskName,
        category: newTaskCategory,
        description: newTaskDescription,
        color: selectedColor,
      });
      setNewTaskName("");
      setNewTaskCategory("");
      setNewTaskDescription("");
      setSelectedColor("primary");
    }
  };

  return (
    <section className="w-full p-[30px] rounded-lg shadow-md">
      <h2 className="text-2xl font-futura-medium mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col font-roboto">
            <label htmlFor="taskName" className="text-xs text-black mb-2">
              Task Name
            </label>
            <input
              id="taskName"
              type="text"
              placeholder="Task name"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
              className="text-sm p-2 border rounded-md"
            />
          </div>

          <div className="flex flex-col font-roboto">
            <label htmlFor="taskCategory" className="text-xs text-black mb-2">
              Category
            </label>
            <input
              id="taskCategory"
              type="text"
              placeholder="Category"
              value={newTaskCategory}
              onChange={(e) => setNewTaskCategory(e.target.value)}
              className="text-sm p-2 border rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-col font-roboto">
          <label htmlFor="taskDescription" className="text-xs text-black mb-2">
            Description
          </label>
          <textarea
            id="taskDescription"
            placeholder="Task description"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
            className="text-sm p-2 border rounded-md"
          />
        </div>

        <div className="flex flex-col font-roboto">
          <label htmlFor="taskColor" className="text-xs text-black mb-2">
            Color
          </label>
          <select
            id="taskColor"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="text-sm p-2 border rounded-md"
          >
            {colors.map((color) => (
              <option key={color.value} value={color.value}>
                {color.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-end">
          <Button type="submit">
            <span className="transform transition-transform duration-300 hover:-rotate-180">
              <Plus />
            </span>
          </Button>
        </div>
      </form>
    </section>
  );
}

export default AddTaskForm;
