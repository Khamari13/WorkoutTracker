const router = require("express").Router();
const path = require("path");

//Index path
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
//Exercise path
router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

//Stats path
router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  module.exports = router;