const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    id: { type: String },
});

const userModel = mongoose.model('users', UserSchema);

module.exports = userModel;