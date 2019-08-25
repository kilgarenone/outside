const express = require("express");
const router = express.Router();

const db = require("../db");

module.exports = router;

router.get("", (req, res) => {
  res.render("index", { title: "testing title" });
});

router.get("/posts", (req, res) => {
  res.send({ posts: [1, 23] });
});
