// const Membership = require("../models/membershipModel");
const mongoose = require("mongoose");
const { MembershipModel } = require("../models/MembershipModel");



const get_all_membership_schemes = (req, res, next) => {

    MembershipModel.find()
        .select("_id membership_name membership_amt validity")
        .exec()
        .then(docs => {
            if (docs.length > 0) {
                const response = {
                    code: 1,
                    count: docs.length,
                    message: "success",
                    result: docs

                };
                res.status(200).json(response);
            } else {
                res.status(200).json({
                    code: 0,
                    message: "No entries found",
                    result: docs
                });
            }

        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

const add_new_membership = (req, res, next) => {
    let mName = req.body.membership_name;
    let mAmt = req.body.membership_amt;
    let mVal = req.body.validity;

    const membership = new MembershipModel(
        {
            membership_name: mName,
            membership_amt: mAmt,
            validity: mVal
        }
    );

    membership.save()
        // .select("_id first_name last_name")
        // .exec()
        .then(result => {
            res.status(200).json({
                code: 1,
                message: "membership added",
                result: result
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                code: 0,
                error: err
            });
        });
};




module.exports = {
    get_all_membership_schemes, add_new_membership
}