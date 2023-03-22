const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("this is the index page");
});

module.exports = router;
