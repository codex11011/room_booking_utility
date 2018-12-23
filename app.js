<<<<<<< HEAD
//mongodb://admin:qwerty345@cluster0-shard-00-00-zsz5o.mongodb.net:27017,cluster0-shard-00-01-zsz5o.mongodb.net:27017,cluster0-shard-00-02-zsz5o.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true
=======
>>>>>>> 3d1ea1508f56dc1e9d3367a8a10f3727d8569350
var express = require("express");
var mongoose = require("mongoose");
var User = require("./models/user");
var engine = require("ejs-mate");
var passport = require("passport");
var ejs = require("ejs");
var bodyParser = require("body-parser");
var LocalStrategy = require("passport-local");
var flash = require("connect-flash");
var passportLocalMongoose = require("passport-local-mongoose");
<<<<<<< HEAD
var dbConn = "mongodb://localhost:27017/auth_lt"; //mongodb://akshay:qwerty123@ds163103.mlab.com:63103/lt 
mongoose.connect(dbConn);
var port = process.env.PORT || 3000;
=======
mongoose.connect("mongodb://localhost/auth_app");
>>>>>>> 3d1ea1508f56dc1e9d3367a8a10f3727d8569350

var mainRoutes = require("./routes/main");
var userRoutes = require("./routes/user");

// var port = process.env.PORT || 8080;
var app = express();

// app.set("views", __dirname);
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.engine("ejs", engine);
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //complex algo for parsing

app.use(
  require("express-session")({
    secret: "whats up",
    resave: false,
    saveUninitialized: false
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

<<<<<<< HEAD
//app.use(mainRoutes);
app.use(userRoutes);


app.use(function(req, res, next) {
=======
app.use(mainRoutes);
app.use(userRoutes);

app.use(function (req, res, next) {
>>>>>>> 3d1ea1508f56dc1e9d3367a8a10f3727d8569350
  res.locals.currentUser = req.user;
  res.locals.message = req.flash("error");
  next();
});

<<<<<<< HEAD
app.listen(port, function() {
=======
app.listen(3000, function () {
>>>>>>> 3d1ea1508f56dc1e9d3367a8a10f3727d8569350
  console.log("server is running");
});
