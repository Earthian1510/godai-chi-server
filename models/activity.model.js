
const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }, 
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    }, 
    category: {
        type: String,
        required: true,
        enum: ['Reading', 'Coding', 'MTP', 'Health', 'Plantation', 'PoNR', 'Screen Time', 'Sleep', 'CE-4-17', 'Relationship', 'Other']
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Activity', activitySchema)
