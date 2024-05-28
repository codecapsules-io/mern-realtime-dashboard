 
const express = require('express');
const { getData, createData } = require('../controllers/dataController');

const router = express.Router();

router.get('/data', getData);
router.post('/data', createData);

module.exports = router;