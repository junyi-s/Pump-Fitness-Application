const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, minLength: 5},
    password: {type: String, required: true},
});