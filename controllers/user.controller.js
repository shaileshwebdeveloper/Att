const { UserModel } = require("../models/UserModel");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const userSignup =  async(req, res) => {

    // team leader 
    // user
    // name mobile email designation shift password confirm password 
  
    const { name,mobile,email,designation, shift, password} = req.body;
  
  
    const isUser =  await UserModel.findOne({email})
     
    if(isUser){
      res.send({'msg':'User already exists, try logging in'})
    }
    else{
    bcrypt.hash(password, 5, async function(err, hash) {
      // Store hash in your password DB.
   
       if(err){
         res.send({"msg" : "Something went wrong please try again"});
         console.log('err', err)
       }
       else{
   
         const new_user = new UserModel({
            name,
            mobile,
            email,
            designation,
            shift,
            password : hash
          });
        
          try {
            await new_user.save();
            res.send("User Successfully Added");
          } catch (error) {
            res.send("Something went wrong please try again");
            console.log('error', error)
          }
       }  
   
     });
    }
  
}

const userLogin = async(req, res) => {

    const {email, password} = req.body
  
    const user = await UserModel.findOne({email})
  
    if(user === null){
      res.status(500).send({'msg' : 'please check the email & password'})
    }
    else{
          const hashed_password = user.password
          console.log("hashed_password", hashed_password)
        bcrypt.compare(password, hashed_password, function(err, result) {
      
      if(err){
        console.log("err", err)
         res.status(500).send({'msg':'Something went wrong, try again later'})
      }
      else if(result){
  
         const user_id = user._id;
         var token = jwt.sign({ user_id }, process.env.SECRET_KEY);
         console.log(user)
         res.send({message : 'Login Successful', token : token})
  
    
      }
      else{
  
         res.status(500).send('Login Failed')
  
      }
    });
    }
  }

const userList = async(req, res) => {

    try {
     
       //name designation status 
   const all_user = await UserModel.find()
   res.status(200).send({"msg" : "user list"})
 
    } catch (error) {
     
     console.log(error)
     
    }
 
 
 }

const getUser = async(req, res) => {

    try {
 
     const id =  req.params.id
     //  res.send(id) 
   
      const user = await UserModel.find({_id : id})
     
      res.send(user)   
     
    } catch (error) {
     
     console.log(error)
 
    }
 
 }

const updateUser = async(req, res) => {

    try {
  
      const id = req.params.id
  
      const payload = req.body 
      const user_data = await UserModel.updateOne({_id : id}, {$set: payload})
      
      //  res.send(user_data)
        
      res.send({'msg' : 'User Data Updated Succesfully'})
      
    } catch (error) {
      
    console.log("error", error)
  
    }
  }


const deleteUser = async(req, res) => {


    try {
  
      const id = req.params.id
   
      const user_data =  await UserModel.deleteOne({_id : id})
     
      res.send({"msg" : "User Data deleted successfully"})
      
    } catch (error) {
       
      console.log("Error",  error)
  
      res.send(error)
  
    }
  
  
  }


  module.exports = {
      userLogin, getUser, userList, userSignup, updateUser, deleteUser
  }