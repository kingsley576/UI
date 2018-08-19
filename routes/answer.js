const express = require('express');

const router = express.Router();
const qs = require('../questions.json');

const indexController = require('../controllers/answer')(qs);

router.get('/:questionId', indexController.GetOneQuestion);

router.post('/', indexController.PostAnAnswer);

module.exports = router;
