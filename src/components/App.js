import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    // TODO: write code to add a new task
    setTasks((prevTask) => [...prevTask, newTask])
  };

  const handleToggleTask = (id) => {
    // TODO: write code to toggle a task's status
    setTasks((prevTask) => prevTask.map((task) => 
    task.id === id ? {...task, completed: !task.completed} : task
    ));
  };

  const handleDeleteTask = (id) => {
    // TODO: write code to delete a task
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      {/*TODO: add a form to add a new task*/}
      <Form onAddTask={handleAddTask} />

      {/*TODO: add a list of tasks*/}
      <TaskList
      tasks={tasks}
      onDeleteTask={handleDeleteTask}
      onToggleTask={handleToggleTask} />
    </div>
  );
}

export default App;
