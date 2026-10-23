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
        const { userID, refUserId, _id, ...updates } = req.body;
        const updatedJob = await Job.updateOne({
            _id: jobId,
            refUserId: userID,
        },{ $set : updates } )
       if (updatedJob.matchedCount === 0) {
           return res.status(404).json({ "message": "Job not found" })
       }
       res.json({"message": "Updated field successfully"})
        
    } catch (error) {
        res.status(500).json({ "error": "Some issue with /edit route", "details": error.message });

    }
})


router.get("/job-description/:jobId", async(req,res)=>{
    try {
        const jobId = req.params.jobId;
        const jobDescription = await Job.findOne({_id: jobId})
        const token = req.header('authorization');
        if(token){
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET )
        if( decodedToken.userID === jobDescription.refUserId.toString()) {
            return res.json({"data": jobDescription, isEditable: true})
        }
        return res.json({"data": jobDescription, isEditable: false})

    }else
        {
            return res.json({"data": jobDescription, isEditable: false})
        }
    } catch (error) {
        console.log("some issue with /job-description route", error)
    }
})

router.delete("/:jobId", jwtVerify, async(req, res) => {
    try {
        const result = await Job.deleteOne({ _id: req.params.jobId, refUserId: req.body.userID })
        if (result.deletedCount === 0) {
            return res.status(404).json({ "message": "Job not found" })
        }
        res.json({ "message": "Job deleted successfully" })
    } catch (error) {
        res.status(500).json({ "error": "Some issue with /job route", "details": error.message });
    }
})



module.exports = router;