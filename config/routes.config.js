const express = require('express');
const router = express.Router();
const notes = require('../controllers/notes.controller');

router.get('/', notes.list);
router.get('/create-note', notes.create);
router.post('/notes', notes.doCreate);
router.post('/notes/:id', notes.doCreate);


module.exports = router;
