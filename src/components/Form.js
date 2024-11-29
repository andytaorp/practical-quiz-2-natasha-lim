import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();

    if (!description) return;

    const newTask = {
      id: Date.now(),
      description,
      completed: false,
    }

    onAddTask(newTask);

    //resetting the form after adding a task
    //set the state variables back to default value
    setDescription("");
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  }


  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input placeholder="New Task" id="task" type="text" value={description} onChange={handleDescription} />
      <button>Add Task</button>
    </form>
  );


  // return {
  //   /*TODO: add a form to add a new task*/
  // };
}
