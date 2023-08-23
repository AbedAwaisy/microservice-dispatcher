const express = require('express');
const router = express.Router();

// Controller
const ErrorController = require('../controllers/errorController');

// Define routes
router.get('/errors', ErrorController.getErrors);
// router.post('/addError', ErrorController.createError);

// Add routes
// router.get('/Errors/:name', ErrorController.getErrorByName);
// router.put('/updateError/:ErrorID', ErrorController.updateErrorById);
// router.delete('/Errors/delete/:ErrorID', ErrorController.deleteErrorById);



module.exports = router;
