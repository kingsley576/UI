const express = require('express');
const router = express.Router();

const questionController = require('../controllers/questions');

router.post('/', questionController.postQuestion);



module.exports = router;