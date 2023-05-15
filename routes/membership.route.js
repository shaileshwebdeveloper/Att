const express = require("express");
const {Router} = require('express');
const { get_all_membership_schemes, add_new_membership } = require("../controllers/membership.controller");

const membershipRouter = Router()

membershipRouter.get("/get_membership_schemes", get_all_membership_schemes);

membershipRouter.post("/add_membership", add_new_membership);

// router.post("/delete_user", MembershipController.user_delete);

module.exports = {membershipRouter}