var router = require("express").Router();
var User = require("../models/user");
var Book = require("../models/book");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var bodyparser = require("body-parser");
let get_slots = require("../public/js/list_slot");
var path = require("path");

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.get("/register", function (req, res) {
  //show signUp page
  res.render("accounts/register", { currentUser: req.user });
});
//login routes
router.get("/login", function (req, res) {
  //render login form
  res.render("accounts/login", {
    currentUser: req.user,
    message: req.flash("error")
  });
});
router.get('/profile', isLoggedIn, function (req, res) {

  if (req.query.search) {
    console.log("hi");
    var regex = new RegExp(escapeRegex(req.query.search), 'gi');
    Book.find({ day: regex }, function (err, x) {
      if (err) {
        console.log(err);
      } else {
        res.render("main/booking", { x: x, currentUser: req.user });
      }
    });
  } else {
    Book.find({}, function (err, x) {
      if (err)
        console.log(err);
      else {
        res.render("accounts/profile", { x: x, currentUser: req.user });
        console.log(req.user);
      }


    });
  }
});
// router.get("/booking", function(req, res) {
//   Book.find({},(err,x) =>{
//     if(err)
//          console.log(err);
//     else
//       res.render('main/booking',{x:x,currentUser: req.user });
//   });  

//   //show signUp page
// });
router.post("/register", function (req, res) {
  //handling user sign up
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    function (err, user) {
      if (err) {
        //req.flash("error","You logged out!!");
        res.render("accounts/register", { currentUser: req.user });
      } else {
        passport.authenticate("local")(req, res, function () {
          res.redirect("/profile");
        });
      }
    }
  );
});

// router.get("/profile", isLoggedIn, function(req, res) {

//   res.render("accounts/profile", { currentUser: req.user });
// });

router.get("/profile/new", isLoggedIn, function (req, res) {
  res.render("main/lecture");
});

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};


//login logic
//middleware
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true
  }),
  function (req, res) { }
);

router.get("/logout", function (req, res) {
  req.logout();
  req.flash("error", "You logged out!!");
  res.redirect("/");
});

// router.get("/booking", isLoggedIn, function(req, res) {
//   res.render("main/booking");
// });
router.post("/profile", function (req, res) {//2. create route:to add new campground to db 
  var day = req.body.day;
  var strttime = req.body.strttime;
  var endtime = req.body.endtime;
  let st_slot = strttime.split(':');
  let et_slot = endtime.split(':');
  let arr = (st_slot).concat(et_slot);
  var lt = req.body.lt;
  var ask = { id: req.user._id };
  get_slots(arr, lt, day, ask, res);
  //   username:req.user.username};
  // var newBook = { day: day, strttime: strttime, endtime: endtime, lt: lt, ask: ask };
  // console.log(req.body);
  // Book.create(newBook, function (err, Book) {
  //   if (err)
  //     console.log(err);
  //   else
  //     res.redirect("/profile");
  // })
});
router.post("/update_bk", (req, res) => {
  console.log(req.body);
  let x = (String(req.body.bk) === "true")
  let y = !x;
  console.log(y);
  let s_obj = {
    "day": req.body.day,
    "strttime": req.body.strttime.replace(" ", ""),
    "endtime": req.body.endtime.replace(" ", ""),
    "lt": req.body.lt
  };

  Book.findOneAndUpdate(s_obj, { $set: { "bk": y } }, { upsert: true, new: true }, (err, doc) => {
    if (err) console.log(err);
    else {
      console.log(doc);
    }
  });

  res.redirect("/")


  // Book.find({ "strttime": req.body.strttime.replace(" ", ""), "endtime": req.body.endtime.replace(" ", "") }, (err, doc) => {
  //   if (err) console.log(err);
  //   else {
  //     console.log(doc);
  //   }
  // });

})

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "login first");
  res.redirect("/login");
}
module.exports = router;
