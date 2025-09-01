

import React, { useState } from "react";

export default function ScheduledTasks({ tasks, addTask }) {
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState("");

  const handleSchedule = () => {
    if (!taskName.trim() || !date) return;
    addTask({
      name: taskName,
      date,
      status: "pending",
    });
    setTaskName("");
    setDate("");
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Scheduled Tasks</h2>

      {/* Add Scheduled Task */}
      <div className="flex flex-col gap-3 mb-4">
        <input
          type="text"
          placeholder="Task name..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border rounded-lg p-2"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded-lg p-2"
        />
        <button
          onClick={handleSchedule}
          className="bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Schedule Task
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.map((t) => (
          <div
            key={t.id}
            className="p-4 rounded-xl shadow border"
          >
            <span>{t.name} (📅 {t.date})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
