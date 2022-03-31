const express = require("express");
const router = express.Router();

// Load SEPractice model
const SEPractice = require("../../models/SEPractice");

// @route GET api/SEPractice/test
// @description tests SEPractices route
// @access Public
router.get("/test", (req, res) => res.send("sepractices route testing!"));

// @route GET api/SEPractice
// @description Get all SEPractices
// @access Public
router.get("/", (req, res) => {
  SEPractice.find()
    .then((sepractices) => res.json(sepractices))
    .catch((err) =>
      res.status(404).json({ nosepracticesfound: "No SEPractices found" })
    );
});

module.exports = router;
