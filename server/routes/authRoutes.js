const express = require('express');
const User  = require('../models/userSchema')
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken')
const jwtVerify = require('../middlewares/authMiddleware')
const saltRounds = 10;

const router = express.Router();


router.post("/register", async (req,res) => {
    try {
        const { username, email, password, contact} = req.body
        if(!username || !email || !password || !contact){
            return res.status(400).json({message: "bad request"})
        }
            const hash= await bcrypt.hash(password, saltRounds);
            const newUser =  await User.create({
                username : username,
                email: email,
                password:hash,
                contact: contact
            })
            const jwtToken = await jwt.sign({userId: newUser._id}, process.env.TOKEN_SECRET)
            res.json({message: "User created successfully", token : jwtToken})
        
        
    } catch (error) {
        console.log("error occured in register "+ error)
    }
})


router.post("/login", jwtVerify,async (req,res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password) {
            return res.status(400).json({message: "bad request"})
        }

        const userDetails = await User.findOne({email})
        if(!userDetails) {
            return res.status(400).json({message: "Invalid credentials"})
        }else if(!await bcrypt.compare(password, userDetails.password )){
            return res.status(400).json({message: "Invalid credentials"})
        }

        
        const jwtToken = jwt.sign( {userID: userDetails._id}, process.env.TOKEN_SECRET)
        res.json({message: "User logged in Successfully", token:  jwtToken})
        
    } catch (error) {
        console.log("error occured in login route "+ error)
        
    }
    
})


module.exports = router 