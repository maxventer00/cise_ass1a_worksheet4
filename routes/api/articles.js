const express = require("express");
const router = express.Router();

// Load Article model
const Article = require("../../models/Article");

// @route GET api/article/test
// @description tests article route
// @access Public
router.get("/test", (req, res) => res.send("article route testing!"));

// @route GET api/articles
// @description Get all articles
// @access Public
router.get("/", (req, res) => {
  Article.find()
    .then((articles) => res.json(articles))
    .catch((err) =>
      res.status(404).json({ noarticlesfound: "No Articles found" })
    );
});

module.exports = router;
