
const groupByDate = (tasks) => {
  return tasks.reduce((acc, task) => {
    if (!acc[task.date]) acc[task.date] = [];
    acc[task.date].push(task);
    return acc;
  }, {});
};

export default function TaskHistory({ tasks }) {
  const grouped = groupByDate(tasks);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Task History</h2>
      {Object.keys(grouped).map((date) => (
        <div key={date} className="mb-6">
          <h3 className="font-bold mb-2">{date}</h3>
          {grouped[date].map((t) => (
            <div key={t.id} className="p-3 rounded-lg shadow border mb-2">
              {t.name} - {t.duration} hrs
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}


