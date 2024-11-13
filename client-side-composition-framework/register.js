import { start, registerApplication } from "https://cdn.skypack.dev/single-spa";

// Register the search micro frontend
registerApplication(
  "search",
  () => import("./search/search-component.js"),
  (location) => location.pathname === "/" // condition for when to show the search component
);

// Register the tasks micro frontend
registerApplication(
  "tasks",
  () => import("./tasks/tasks-component.js"),
  (location) => location.pathname === "/" // condition for when to show the tasks component
);

// Start the single-spa framework
start();
