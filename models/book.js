var mongoose = require("mongoose");
//var passportLocalMongoose=require("passport-local-mongoose");
var BookSchema = new mongoose.Schema({
<<<<<<< HEAD
  day: String,
  strttime: String,
  endtime: String,
  // duration:String,
  lt: String,
  ask: { id: { type: mongoose.Schema.Types.ObjectId, ref: "User" } },
  book_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  bk: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  intersect: { type: Number, default: 0 }
  //author:{id:{type:mongoose.Schema.Types.ObjectId,ref:"User"}}
=======
    day: String,
    strttime: String,
    endtime: String,
    // duration:String,
    lt: String,
    ask: { id: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, username: String },
    bk: { type: Boolean, default: false }
    //author:{id:{type:mongoose.Schema.Types.ObjectId,ref:"User"}}
>>>>>>> 3d1ea1508f56dc1e9d3367a8a10f3727d8569350
});

//BookSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Book", BookSchema);
