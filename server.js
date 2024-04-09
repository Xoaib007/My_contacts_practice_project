const dotenv = require('dotenv').config();
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');

connectDB();

const app = express();

const port = process.env.Port || 5000;

// app.use(cors());

app.use(express.json()); 
app.use('/api/contacts', require("./routes/contactRoutes"));
app.use (errorHandler)

app.listen(port, () =>{
    console.log(`port ${port}`)
})