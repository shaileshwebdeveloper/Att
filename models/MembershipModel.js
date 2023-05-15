const mongoose = require("mongoose");

const membershipSchema = mongoose.Schema({
    membership_name: { type: String, },
    membership_amt: { type: String, },
    validity: { type: String, }
});


const MembershipModel = mongoose.model("membership", membershipSchema);

module.exports =  {MembershipModel}
