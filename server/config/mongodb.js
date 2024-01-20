//  config to setup mongodb atlas connection 
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGODB_URL);
      console.log(`MongoDB Connected 💫`);
    } catch (error) {
      console.error("something wrong with db connection"+ error.message);
      process.exit(1);
    }
  }
  

  module.exports = connectDB;

