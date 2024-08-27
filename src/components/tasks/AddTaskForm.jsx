import React, { useState } from "react";
import Button from "../common/Button";

function AddTaskForm({ onAddTask }) {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskName && newTaskCategory) {
      onAddTask({ name: newTaskName, category: newTaskCategory });
      setNewTaskName("");
      setNewTaskCategory("");
    }
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-futura-medium mb-4">Add New Task</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row font-roboto gap-4"
      >
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
        <Button type="submit">Add Task</Button>
      </form>
    </section>
  );
}

export default AddTaskForm;
