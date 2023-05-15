const express = require("express");
const cors =  require('cors')
const { connection } = require("./config/db");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { EmployeeModel } = require("./models/UserModel");
const e = require("express");
const { ShiftModel } = require("./models/CompanyShiftModel");

require("dotenv").config();

const app = express();
const nodemailer = require("nodemailer")
const randomstring = require("randomstring");
const { userRouter } = require("./routes/user.route");
const { membershipRouter } = require("./routes/membership.route");
const { shiftRouter } = require("./routes/shift.route");
const { liveTrackingRouter } = require("./routes/livetracking.route");

app.use(cors())

require("dotenv").config();

app.use(express.json());
app.use(cors())
app.use(express.json());

app.use('/', userRouter)

app.use('/membership', membershipRouter);

app.use('/shift', shiftRouter)

app.use('/', liveTrackingRouter)

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connection to DB successfully");
  } catch (error) {
    console.log("Error connecting to DB");
    console.log("error", error);
  }

  console.log("Listening Port 3001");
});