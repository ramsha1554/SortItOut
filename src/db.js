import Dexie from "dexie";

export const db = new Dexie("ProductivityDB");

db.version(1).stores({
  tasks: "++id, title, createdAt, completedAt, claimedTime, actualMinutes, status, isLying"
});
