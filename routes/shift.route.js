const {Router} = require('express');
const { add_new_shift, get_shifts_by_company_id, delete_shift } = require('../controllers/shift.controller');


const shiftRouter = Router()

shiftRouter.post("/save_shift", add_new_shift);

shiftRouter.post("/get_shifts_by_compid", get_shifts_by_company_id);

shiftRouter.post("/shift_delete", delete_shift);

module.exports = {shiftRouter};


