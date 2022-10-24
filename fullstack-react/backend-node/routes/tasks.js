const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
  res.json({ response: "Welcome to task api" });
});

module.exports = router;
