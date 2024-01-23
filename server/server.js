const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 3000

const db = require("./config/mongodb")
const authRoutes  = require('./routes/authRoutes')
const jobRoutes  = require('./routes/jobRoutes')

app.use(express.json());


app.use('/api/v1', authRoutes)
app.use('/api/v1/job', jobRoutes)


app.get('/', (req, res) => {
    res.json({"message": "Server is up 🚀"} )
})
// health api
app.get('/health', (req, res) => {
    res.json({"message": "Server is healthy 💪", signal: "🟢", status: 200 ,time:  new Date().toUTCString() } )
})

// connect ot db
db();
app.listen( PORT , (err) => { 
    if(!err) {
        console.log(` 🚀 Server is up on PORT http://localhost:${PORT}`)
    }
})