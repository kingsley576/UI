const express = require('express');

const router = express.Router();
const qs = require('../questions.json');

const questionController = require('../controllers/question');

router.get('/', questionController.questionGetAll);

module.exports = router;
