
const express = require('express');
const router = express.Router();
const calculadoraController = require('./controllers/calculadoraController');

router.post('/sum', calculadoraController.sum);
router.post('/subtract', calculadoraController.subtract);
router.post('/multiply', calculadoraController.multiply);
router.post('/divide', calculadoraController.divide);

module.exports = router;
