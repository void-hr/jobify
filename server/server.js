const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 3000

app.listen( PORT , (err) => { 
    if(!err) {
        console.log(` 🚀 Server is up on PORT ${PORT}`)
    }
})