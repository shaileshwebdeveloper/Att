const mongoose = require('mongoose')


const userShema =  new mongoose.Schema({
  
  name : {type : String, required : true},
  mobile : {type : Number, required : true},
  email : {type : String, required : true},
  designation : {type : String, required : true},
  shift : {type : String, required : true},
  password : {type : String, required : true}


})


const UserModel = mongoose.model('user', userShema)  

module.exports =  {UserModel}

