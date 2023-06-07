let mongoose = require('mongoose');

let todoSchema = new mongoose.Schema({
  email: {
    type: String,
    required:true
  },
  name:{
    type:String,
    required:true

  },
  password:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model('todo', todoSchema);