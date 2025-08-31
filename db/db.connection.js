
const mongoose = require('mongoose')
require('dotenv').config()

const mongoURL = process.env.MONGODB 
const initializeDB = async () => {
    try{
        const connection = await mongoose.connect(mongoURL)
        console.log("Connected to DB")
    }
    catch(error){
        console.log('Failed to connect DB', error)
    }
}

module.exports = initializeDB