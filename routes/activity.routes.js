
const express = require('express')
const Activity = require('../models/activity.model')
const router = express.Router()

// API Routes 

router.post("/activity", async (req, res) => {
    try{
        const activity = new Activity(req.body)
        await activity.save()
        res.json(activity)
    }
    catch(error){
        res.status(400).json({ error: error.message})
    }
})

router.get("/activity", async (req, res) => {
    try{
        const allActivities = await Activity.find()
        res.json(allActivities)
    }
    catch(error){
        res.status(400).json({ error: error.message})
    }
    
    
    
    
})

module.exports = router 