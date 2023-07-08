const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    }, 
    date:{
        type: Date,
        default: Date.now
    }
  });
  // this will be the name of the collection in the database here: user
  const User = mongoose.model('user', UserSchema);
  // to make the email field unique we need to create an index on the email field.
  User.createIndexes();
  module.exports = User;