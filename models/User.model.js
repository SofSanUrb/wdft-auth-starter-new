const mongoose = require("mongoose");

// 1. Define your schema
let UserSchema = new mongoose.Schema({
  name:String,
  email:{
    type:String,
    required:true
  },
  password: {
    type:String,
    required:true
  }
})

// 2. Define your model
let UserModel = mongoose.model('user', UserSchema)

// 3. Export your Model with 'module.exports'
module.exports = UserModel