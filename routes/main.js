<<<<<<< HEAD
var bodyparser = require("body-parser");
let get_slots = require("../public/js/list_slot");
var router = require("express").Router();
var User = require("../models/user");
var Book = require("../models/book");
var path = require("path");
var Intersect = require("../public/js/intersect");
=======
var router = require("express").Router();

router.get("/", (req, res) => {
  res.render("main/home", {
    currentUser: req.user,
    message: req.flash("error")
  });
});

module.exports = router;
>>>>>>> 3d1ea1508f56dc1e9d3367a8a10f3727d8569350
