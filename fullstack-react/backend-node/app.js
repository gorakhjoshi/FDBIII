const express = require("express");
const tasks = require("./routes/tasks");

const app = express();

app.use(express.json());

app.use("/api/v1/tasks", tasks);

const port = 4000;

app.listen(port, console.log(`Server is listening in port ${port}`));
