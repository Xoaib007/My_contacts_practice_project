const dotenv = require('dotenv').config();
const express = require('express');
// const cors = require('cors');
const app = express();
const port = process.env.Port || 5000;

// app.use(cors());
// app.use(express.json());

app.get('/api/contacts', (req,res) =>{
    res.status(200).send('Port is running')
});

app.listen(port, () =>{
    console.log(`port ${port}`)
})