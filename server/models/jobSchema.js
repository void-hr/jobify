const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    }, 
    logoUrl: {
        type: String,
        // required: true,
    },
    jobPosition: {
        type: String,
        required: true,
    },
    monthlySalary: {
        type: String,
        required: true,
    },
    jobType: {
        type: String,
        required: true,
    },
    mode: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    jobDescription: {
        type: String,
        required: true,
    },
    aboutCompany: {
        type: String,
        required: true,
    },
    skills: {
        type: Array,
        required: true,
    },
    information: {
        type: String,
    },
    refUserId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },

},
{ timestamps: true,}
)

const Job = mongoose.model("Job", jobSchema)

module.exports = Job;