const mongoose = require('mongoose');
const MemberSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    status: {type: String}
});

const Member = mongoose.model('Member', MemberSchema);

module.exports = Member;

/**
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
name: String,
age: Number,
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
 */