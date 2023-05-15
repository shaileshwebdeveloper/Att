const { LiveTrackingModel } = require("../models/LiveTrackingModel");

const updateLocation = async(req, res) => {


    const { coordinates, datetime, status } = req.body; 

    const new_location = new LiveTrackingModel({
        coordinates,
        datetime,
        status,
      });
    
      try {
        await new_location.save(); 
        res.send("location added successfully");
      } catch (error) {
        res.send("Something went wrong please try again");
        console.log('error', error)
      }
 }





 module.exports = {
    updateLocation
}