const express = require("express");
const app = express();
const tasks = require("./tasks.json");

app.use(express.json());

app.get("/main", (req, res) => {
  const taskList = tasks
    .map(
      (task, index) =>
        `<li onclick="fetch('/view/${index}').then(res => res.json()).then(data => console.log(data))">${task.name}</li>`
    )
    .join("");
  res.send(`<ul>${taskList}</ul>`);
});

app.get("/view/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < tasks.length) {
    res.json(tasks[id]);
  } else {
    res.status(404).send("Task not found");
  }
});

app.listen(3001, () => console.log("Tasks Service running on port 3001"));
