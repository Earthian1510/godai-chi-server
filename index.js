
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const initializeDB = require('./db/db.connection')
const activityRoutes = require('./routes/activity.routes')

const app = express()
app.use(express.json())
app.use(cors())

initializeDB()
app.use('/api', activityRoutes)

app.get('/', (req, res) => {
    res.send('Hello, Musashi Miyamoto, I am working on my earth element')
})

const PORT = process.env.PORT || 3000 
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})