// route.js
const express = require('express');
const router = express.Router();
const landingcontroller = require('../Middlewares/landingcontroller')
router.get('/consultation', landingcontroller);

module.exports = router;
