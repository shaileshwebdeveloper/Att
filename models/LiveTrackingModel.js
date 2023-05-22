const mongoose = require('mongoose')


const liveTrackingShema =  new mongoose.Schema({
  
  
  coordinates : {type : Object, required : true},
  datetime: {type : String, required : true},
  status: {type : String, required : true},

})


const LiveTrackingModel = mongoose.model('tracking', liveTrackingShema)  

module.exports =  {LiveTrackingModel}
