// route.js
const express = require('express');
const router = express.Router();

router.get('/consultation', (req, res) => {
  res.send('This is the landing page');
});

module.exports = router;
