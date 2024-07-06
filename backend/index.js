// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World\n");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

///////

const express = require("express");
const app = express();
const port = 3001;

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello from the server!" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

///////

// const express = require("express");
// const app = express();
// const path = require("path");

// // Middleware pour servir les fichiers statiques du dossier 'frontend/build'
// app.use(express.static(path.join(__dirname, "../frontend/build")));

// // Route API
// app.get("/api/hello", (req, res) => {
//   res.send({ message: "Hello from the server!" });
// });

// // Route pour servir l'application React
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
// });

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
