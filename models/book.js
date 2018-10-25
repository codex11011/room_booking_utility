var mongoose = require("mongoose");
//var passportLocalMongoose=require("passport-local-mongoose");
var BookSchema = new mongoose.Schema({
    day: String,
    strttime: String,
    endtime: String,
    // duration:String,
    lt: String,
    ask: { id: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, username: String },
    bk: { type: Boolean, default: false }
    //author:{id:{type:mongoose.Schema.Types.ObjectId,ref:"User"}}
});

//BookSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Book", BookSchema);
