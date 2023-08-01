const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    preferred_date: { type: Date, required: true },
    preferred_time: { type: String, required: true },
    reason: { type: String, required: true },
    department: { type: String },
    insurance_provider: { type: String },
    policy_number: { type: String },
    primary_physician: { type: String },
    medical_conditions: { type: String },
    surgeries: { type: String },
    allergies: { type: String },
    language: { type: String },
    accessibility: { type: String },
    additional_info: { type: String },
    consent: { type: Boolean, required: true },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;