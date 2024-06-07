// user schema where user login:

const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true

    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

//for uniqueness of the email:(by this createIndexes we can simply confirmed the uniqueness of the data):
//   this is done for email because we made it unique :true.
const User = mongoose.model('user', UserSchema);
module.exports = User;
