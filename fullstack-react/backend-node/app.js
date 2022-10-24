const express = require("express");
const tasks = require("./routes/tasks");
require("dotenv").config();

const mongoose = require("mongoose");
const connectionString = `mongodb+srv://reacttask:${process.env.DBPassword}@cluster0.s7zzzbn.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to Database..."))
  .catch((error) => console.log(error));

const app = express();

app.use(express.json());

app.use("/api/v1/tasks", tasks);

const port = 4000;

app.listen(port, console.log(`Server is listening in port ${port}`));
