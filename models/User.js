const mongoose = require ('mongoose');// Using Mongoose library for MongoDB
const Schema = mongoose.Schema;

const UserSchema = new Schema({
// defining the properties of schema
    name:{
        type:String,
        required: true

    },

    email:{
        type: String,
        required: true
    },

    password:
    {
        type:String,
        required: true
    },

    date:
    {
        type: Date,
        default: Date.now // shows the current date and time
    }

});

module.exports = User = mongoose.model('User', UserSchema); //here 'user' is the collection name