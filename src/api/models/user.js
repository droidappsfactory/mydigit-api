var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true,
        required: true
        
    },
    email: {
        type: String,
        index: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        index: true,
        required: true
    }
},{strict: true});

var User = mongoose.model('User',UserSchema);

module.exports = {
    User: User
}