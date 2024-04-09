const express = require('express');
const router = express.Router();
const { getContact, getOneContact, createContact, updateContact, deleteContact } = require('../controllers/contactControllers')

// router.route("/").get(getContact);
// router.route("/").post(createContact);
router.route("/").get(getContact).post(createContact);


// router.route("/:id").get(getOneContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);
router.route("/:id").get(getOneContact).put(updateContact).delete(deleteContact);

module.exports = router ;