// search/search.js
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const fs = require("fs");
const PORT = 3001;

app.use(cors());

const getSearchItems = () => {
  const searchFilePath = path.join(__dirname, "search.json");
  let search = [];

  try {
    const data = fs.readFileSync(searchFilePath, "utf8");
    search = JSON.parse(data);
  } catch (err) {
    console.error("Error reading tasks.json:", err);
    search = []; // Fallback to an empty array if there's an error
  }

  return search;
};

app.get("/search", (req, res) => {
  const query = req.query.query?.toLowerCase() || "";
  const results = getSearchItems().filter(
    ({ title, description }) =>
      title.toLowerCase().includes(query) ||
      description.toLowerCase().includes(query)
  );
  console.log(results);
  res.json({ results });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Search service running at http://localhost:${PORT}`);
});
