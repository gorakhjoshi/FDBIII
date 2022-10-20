// ES module
// import express from "express";

// commonjs modules
const express = require("express");

const app = express();

app.get("/v1/breeds", (req, res) => {
  res.send("Hello");
});

const port = 4000;

app.listen(port, console.log(`Server is listening in port ${port}`));
