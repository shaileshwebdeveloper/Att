const mongoose = require("mongoose");

const companyShiftsSchema = mongoose.Schema({
    shift_name: { type: String, },
    shift_time: { type: String, },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    }
});

CompanyShiftModel = mongoose.model("CompanyShifts", companyShiftsSchema);

module.exports = {
    CompanyShiftModel
}