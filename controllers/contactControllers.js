const asyncHandler = require("express-async-handler");
const Contact = require( "../models/contactModel") ; 

const getContact = async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
};

const getOneContact = asyncHandler(async(req, res) => {
    res.status(200).json({  message: "Get a contacts" });
});

const createContact = asyncHandler(async(req, res) => {
    console.log(req.body);
    const {name, email, countryCode, number} = req.body;
    
    if(!name  || !email || !countryCode || !number){
        res.status(400);
        throw  new Error("Please provide name, email, country code and phone number");
    }

    const contact = await Contact.create({name, email, countryCode, number});
    
    res.status(201).json(contact);
});

const updateContact = asyncHandler(async(req, res) => {
    res.status(200).json({  message: `Update contact for ${req.params.id}` });
});

const deleteContact = asyncHandler(async(req, res) => {
    res.status(200).json({  message: `Delete contact for ${req.params.id}` });
});

module.exports = {getContact, getOneContact, createContact, updateContact, deleteContact}; 