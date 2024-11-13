const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const axios = require("axios");
const app = express();

const tasksURL = "http://tasks:3001";
const searchURL = "http://search:3002";

// Root endpoint to combine the fragments from the services
app.get("/", async (req, res) => {
  try {
    const [tasksPage, searchField] = await Promise.all([
      axios.get(`${tasksURL}/main`),
      axios.get(`${searchURL}/main`),
    ]);

    res.send(`
      <html>
        <body>
          <header>
            ${searchField.data}
          </header>
          <main>
            ${tasksPage.data}
          </main>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send("Error fetching data from services");
  }
});

// Proxy `/view` requests to Tasks Service
app.use(
  ["/view"],
  createProxyMiddleware({
    target: tasksURL,
    pathRewrite: { "^/tasks": "" },
    changeOrigin: true,
  })
);

// Proxy `/search` requests to Search Service
app.use(
  ["/search"],
  createProxyMiddleware({
    target: searchURL,
    changeOrigin: true,
  })
);

app.listen(8008, () => console.log("Gateway Service running on port 8008"));
