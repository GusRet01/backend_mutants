const express = require('express');
const router = express.Router();
const { mutantPost, statsGet } = require('../controllers/DnaController');

router.post('/mutant', mutantPost);
router.get('/stats', statsGet);

module.exports = router;
