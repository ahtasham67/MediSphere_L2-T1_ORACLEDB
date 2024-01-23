const express = require('express');
const doctors = require('../Middlewares/selecteddoctor')
const appoinmens = require('../Middlewares/appoinments');
const router = express.Router(); 
router.get('/:id',doctors);
router.get('/appoinments/:id',appoinmens);
module.exports = router;