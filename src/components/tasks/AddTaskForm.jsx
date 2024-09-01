import React, { useState } from "react";
import Button from "../common/Button";

function AddTaskForm({ onAddTask }) {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskName && newTaskCategory) {
      onAddTask({
        name: newTaskName,
        category: newTaskCategory,
        description: newTaskDescription,
      });
      setNewTaskName("");
      setNewTaskCategory("");
      setNewTaskDescription("");
    }
  };

  return (
    <section className="mb-8 p-4 rounded-lg shadow">
      <h2 className="text-2xl font-futura-medium mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit} className="flex flex-col font-roboto gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Task name"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            className="mr-2 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Category"
            value={newTaskCategory}
            onChange={(e) => setNewTaskCategory(e.target.value)}
            className="mr-2 p-2 border rounded"
          />
        </div>
        <textarea
          placeholder="Task description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          className="mr-2 p-2 border rounded"
        />
        <Button type="submit">Add Task</Button>
      </form>
    </section>
  );
}

export default AddTaskForm;
