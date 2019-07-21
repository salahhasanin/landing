const express = require("express");
const router = express.Router();

const contactCtrl = require("../controller/contact.controller");

router.post('/newcontact',contactCtrl.addContact);

module.exports = router;
