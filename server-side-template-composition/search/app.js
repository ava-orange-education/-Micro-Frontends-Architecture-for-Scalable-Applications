const express = require("express");
const app = express();

app.use(express.json());

function generateRandomStrings(count, length = 5) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return Array.from({ length: count }, () =>
    Array.from({ length }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join("")
  );
}

app.get("/main", (req, res) => {
  res.send(
    `<input id="search" type="text" placeholder="Search..." oninput="fetch('/search/' + this.value).then(res => res.json()).then(data => console.log(data))" />`
  );
});

app.get("/search/:value", (req, res) => {
  const results = generateRandomStrings(5);
  res.json(results);
});

app.listen(3002, () => console.log("Search Service running on port 3002"));
