const mongoose = require('mongoose');

const User = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
}, {
    timestamps: false
});

module.exports = mongoose.model('users', User);