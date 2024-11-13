/** Helper function to generate random tasks */
function generateRandomTasks() {
  const tasks = [];
  const taskNames = [
    "Finish homework",
    "Walk the dog",
    "Buy groceries",
    "Clean the house",
    "Read a book",
    "Write a blog post",
    "Complete a project",
    "Check emails",
    "Attend a meeting",
    "Update the website",
  ];

  for (let i = 0; i < 10; i++) {
    tasks.push({
      id: i,
      name: taskNames[Math.floor(Math.random() * taskNames.length)],
    });
  }

  return tasks;
}

/** Tasks component definition */
function TasksComponent() {
  const container = document.createElement("div");
  const heading = document.createElement("h2");
  heading.textContent = "Random Tasks";
  container.appendChild(heading);

  const ul = document.createElement("ul");
  const tasks = generateRandomTasks();
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.name;
    ul.appendChild(li);
  });

  container.appendChild(ul);
  return container;
}

/** Single-spa mount lifecycle event */
export const mount = async () => {
  console.log("Tasks component mounted");

  const tasksComponent = TasksComponent();
  document.getElementById("tasks").appendChild(tasksComponent);
};

/** Single-spa unmount lifecycle event */
export const unmount = async () => {
  console.log("Tasks component unmounted");

  const tasksElement = document.getElementById("tasks");
  if (tasksElement) {
    tasksElement.innerHTML = ""; // Clear the tasks component
  }
};
