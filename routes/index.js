const express = require('express');

const router = express.Router();
const qs = require('../questions.json');

const indexController = require('../controllers/index')(qs);

router.get('/', indexController.indexGetAll);

module.exports = router;
