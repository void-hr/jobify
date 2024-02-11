const express = require('express')
const router = express.Router();
const jwt = require("jsonwebtoken");
const jwtVerify = require("../middlewares/authMiddleware")
const Job = require('../models/jobSchema')


// to create job post
router.post("/create", jwtVerify ,async(req,res)=>{
    try {
        const createdJob = await Job.create({
            ...req.body,
            refUserId : req.body.userID,
        }).then((result)=> {
            res.json({"job created": result.companyName})
        }).catch((error)=> {
            return res.json({"message": error })
        })

    } catch (error) {
        console.log([error.name] +":"+ error.message)
        
    }
})

// to show all jobs
router.get("/all", async(req,res)=>{
    try {
        
        const title = req.query.title || "";
        const skills = req.query.skills;
        const skillArr = skills?.split(",")
        const filter = {};

        const token = req.header('authorization');

      

        // c++ ignoring ++  
        if(skillArr){
            filter.skills = { $in : [...skillArr] }
        }
        // to return array of all job
        // have to use preposition also
        const jobList = await Job.find({
            jobPosition : { $regex : title, $options: "i"},
            ...filter
        });

       

        if(token){
            const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET )
            const updatedJobList = jobList.map(job => {
                const isEditable = decodedToken.userID === job.refUserId.toString();
                return { ...job.toObject(), isEditable }; // Create a new object with the updated isEditable property
            });
            res.json({ data: updatedJobList });
        }
        else {
            res.json({ data: jobList });
        }


    } catch (error) {
        console.log("some issue with /all route: -> ", error.message)
    }
})


router.put("/edit/:jobId", jwtVerify, async(req,res)=>{
    try {

        const jobId = req.params.jobId;
        const updatedJob = await Job.updateOne({
            _id: jobId,
        },{ $set : {
            ...req.body
        },
       } )
       res.json({"message": "Updated field successfully"})
        
    } catch (error) {
        console.log("some issue with /edit route", error)
    }
})


router.get("/job-description/:jobId", async(req,res)=>{
    try {
        const jobId = req.params.jobId;
        const jobDescription = await Job.findOne({_id: jobId})
        const token = req.header('authorization');

        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET )
        if(decodedToken.userID === jobDescription.refUserId.toString()) {
            res.json({"data": jobDescription, isEditable: true})
        }else
        {
            res.json({"data": jobDescription, isEditable: false})
        }
    } catch (error) {
        console.log("some issue with /job-description route", error)
    }
})

router.delete("/:jobId",  async(req, res) => {
    try {
        const jobId = req.params.jobId;
        const deletedJob = await Job.deleteOne({_id : jobId}).then((result)=> {
            res.json({"message" : result})
        }).catch((error) => {
            res.json({[error.name] : error.message})
        })
    } catch (error) {
        console.log("some issue with /job route", error)
    }
})



module.exports = router;