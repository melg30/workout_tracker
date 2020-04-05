const path = require("path");
const router = require("express").Router();

//Set up the exersise and stats routes
router.get("/exercise", (request, response) => {
  response.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (request, response) => {
  response.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
