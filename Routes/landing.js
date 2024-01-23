// route.js
const express = require('express');
const router = express.Router();
const landingcontroller = require('../Middlewares/landingcontroller')
//Home page randering
router.get('/', landingcontroller);
module.exports = router;
