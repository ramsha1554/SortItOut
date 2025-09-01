
import React, { useState } from "react";

export default function DailyTasks({ tasks, addTask, markDone }) {
  const [taskName, setTaskName] = useState("");

  const handleAdd = () => {
    if (!taskName.trim()) return;
    addTask({
      name: taskName,
      date: new Date().toLocaleDateString(),
      status: "pending",
    });
    setTaskName("");
  };

  const handleDone = (id) => {
    const duration = prompt("How many hours did this take?");
    markDone(id, parseFloat(duration) || 0);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Today's Tasks</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="New task..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border rounded-lg p-2 flex-1"
        />
        <button
          onClick={handleAdd}
          className="bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

 
      <div className="space-y-3">
        {tasks.map((t) => (
          <div
            key={t.id}
            className="p-4 rounded-xl shadow border flex justify-between items-center"
          >
            <span>{t.name}</span>
            <button
              onClick={() => handleDone(t.id)}
              className="bg-blue-950 text-white px-3 py-1 rounded-lg"
            >
              Mark Done
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
