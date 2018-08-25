const express = require('express');

const router = express.Router();
const qs = require('../questions.json');

const questionController = require('../controllers/question');

router.get('/', questionController.questionGetAll);
router.get('/:questionId', questionController.GetOneQuestion);
router.post('/', questionController.postQuestion);

module.exports = router;
