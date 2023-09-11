const express = require('express');
const router = express.Router();

// Controller
const ErrorController = require('../controllers/errorController');

// Define routes
router.post('/reportError', ErrorController.sendError);


module.exports = router;
