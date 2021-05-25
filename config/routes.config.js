const express = require('express');
const router = express.Router();
const notes = require('../controllers/notes.controller');

router.get('/', notes.list);

module.exports = router;
