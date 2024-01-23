// route.js
const express = require('express');
const router = express.Router();
const signupcontroller = require('../Middlewares/signupcontroller')
//Home page randering
router.get('/', signupcontroller);
module.exports = router;