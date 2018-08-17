const express = require('express');
const router = express.Router();
var qs = require('../questions.json');

const indexController = require('../controllers/answer');

router.get('/:questionId', indexController.GetOneQuestion);

router.get('/:answer', indexController.PostAnAnswer);

module.exports = router;