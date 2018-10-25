var router = require("express").Router();

router.get("/", (req, res) => {
  res.render("main/home", {
    currentUser: req.user,
    message: req.flash("error")
  });
});

module.exports = router;
