const dotenv = require('dotenv').config();
const express = require('express');
// const cors = require('cors');
const app = express();

const port = process.env.Port || 5000;

// app.use(cors());

app.use('/api/contacts', require("./routes/contactRoutes.js"));

app.listen(port, () =>{
    console.log(`port ${port}`)
})