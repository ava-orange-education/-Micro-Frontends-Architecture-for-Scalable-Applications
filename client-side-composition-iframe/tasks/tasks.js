// tasks/tasks.js
const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');
const fs = require('fs');
const PORT = 3002;

app.use(cors());

const getTasks = () => {
  const tasksFilePath = path.join(__dirname, "tasks.json");
  let tasks = [];

  try {
    const data = fs.readFileSync(tasksFilePath, "utf8");
    tasks = JSON.parse(data);
  } catch (err) {
    console.error("Error reading tasks.json:", err);
    tasks = []; // Fallback to an empty array if there's an error
  }

  return tasks;
};

app.get("/", (req, res) => {
  let tasksHTML = `<h2>Task List</h2><ul>`;
  getTasks().forEach((task) => {
    tasksHTML += `<li><strong>${task.title}:</strong> ${task.description}</li>`;
  });
  tasksHTML += `</ul>`;
  res.send(tasksHTML);
});

app.listen(PORT, () => {
  console.log(`Tasks service running at http://localhost:${PORT}`);
});
