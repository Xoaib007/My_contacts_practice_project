const mongoose = require("mongoose");

const contactSchema = mongoose.Schema ({
    name: {
        type: String, 
        required: [true, "Please provide your name"],
    },
    email: {
        type: String, 
        required: [true, "Please provide your email"],
    },
    countryCode: {
        type: String, 
        required: [true, "Please provide your country code"],
    },
    number: {
        type: String, 
        required: [true, "Please provide your number"],
    },
}, {
    timeStamps : true
})

module.exports = mongoose.model( 'Contact', contactSchema);