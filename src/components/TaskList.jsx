import React from "react";

const TaskList = ({ tasks, markTaskDone }) => {
  const handleDone = (task) => {
    const time = prompt(`How many hours did you spend on "${task.name}"?`, "1");
    if (time) markTaskDone(task.id, parseFloat(time));
  };

  return (
    <div>
      {tasks.length === 0 && <p className="text-gray-500">No tasks today!</p>}
      {tasks.map(task => (
        <div
          key={task.id}
          className={`p-4 my-2 rounded border ${task.done ? "bg-green-100" : "bg-white"}`}
        >
          <div className="flex justify-between items-center">
            <p className={`text-lg ${task.done ? "line-through" : ""}`}>
              {task.name}
            </p>
            {!task.done && (
              <button
                onClick={() => handleDone(task)}
                className="bg-blue-950 text-white px-3 py-1 rounded"
              >
                Mark Done
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
