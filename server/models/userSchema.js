const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
    type: String,
    required: true,
},
email: {
    type: String,
    required:true,
    unique: true
},
password : {
    type: String,
    required: true,
},
contact : {
    type: Number,
    required: true,
    unique,
}

},
    { timestamps: true }
)


const User = mongoose.model('User', userSchema)
module.exports = User