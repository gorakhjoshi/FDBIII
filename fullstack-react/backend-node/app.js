const express = require("express");
// const router = express.Router();

const app = express();

// router.route("/").get((req, res) => {
//   res.send("Hello From Main Route");
// });

// app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello From /hello route");
});

app.get("/", (req, res) => {
  res.send("Hello From Main Route");
});

app.use("/api/v1/tasks", (req, res) => {
  res.json({ response: "Welcome to task api" });
});

const port = 4000;

app.listen(port, console.log(`Server is listening in port ${port}`));
