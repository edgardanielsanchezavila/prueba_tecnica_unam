// routes/zipRoutes.js
const express = require('express');
const zipController = require('../controllers/zipController');
const router = express.Router();

// Define the route for getting zip code information
router.get('/:country/:postalCode', zipController.getZipInfo);

module.exports = router;
