// App.js
import React, { useState } from "react";
import DailyTasks from "./components/DailyTasks";
import ScheduledTasks from "./components/ScheduledTasks";
import TaskHistory from "./components/TaskHistory";
import Graph from "./components/Graph";

export default function App() {
  const [tasks, setTasks] = useState([]); // {id, name, date, status, duration}
  const [showScheduled, setShowScheduled] = useState(false);

  // Add task
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  // Mark task as done
  const markDone = (id, duration) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, status: "done", duration } : t
      )
    );
  };

  const today = new Date().toLocaleDateString();
  const dailyTasks = tasks.filter((t) => t.date === today);
  const scheduledTasks = tasks.filter((t) => t.date !== today && t.status !== "done");
  const completedTasks = tasks.filter((t) => t.status === "done");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Task Manager</h1>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setShowScheduled(false)}
          className={`px-4 py-2 rounded-lg ${!showScheduled ? "bg-blue-950 text-white" : "bg-gray-200"}`}
        >
          Daily Tasks
        </button>
        <button
          onClick={() => setShowScheduled(true)}
          className={`px-4 py-2 rounded-lg ${showScheduled ? "bg-blue-950 text-white" : "bg-gray-200"}`}
        >
          Scheduled Tasks
        </button>
      </div>

      {/* Sections */}
      {!showScheduled ? (
        <>
          <DailyTasks tasks={dailyTasks} addTask={addTask} markDone={markDone} />
          <Graph tasks={completedTasks} />
        </>
      ) : (
        <ScheduledTasks tasks={scheduledTasks} addTask={addTask} />
      )}

      <TaskHistory tasks={completedTasks} />
    </div>
  );
}


