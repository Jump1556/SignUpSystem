const express = require("express");

const router = express.Router();

// Dashboard page
router.get("/", (req, res) => {
  res.render("dashboard");
});

module.exports = router;