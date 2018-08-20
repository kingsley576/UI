const express = require('express');

const router = express.Router();
const qs = require('../questions.json');

const indexController = require('../controllers/index');

router.get('/', indexController.indexGetAll);

module.exports = router;
