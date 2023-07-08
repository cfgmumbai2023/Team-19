const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserModel = new Schema({
	place: String,
	age: Number,
	gender: String,
	WorkExp: String,
	licenseId: String,
	image: String,
	preferences: String,
});

const model = mongoose.model("UserDetails", UserModel);
module.exports = model;
