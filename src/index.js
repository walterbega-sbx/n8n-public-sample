
const express = require('express');
const router = express.Router();
const calculadoraController = require('./controllers/calculadoraController');

router.post('/sum', calculadoraController.soma);
router.post('/subtract', calculadoraController.subtracao);
router.post('/multiply', calculadoraController.multiplicacao);
router.post('/divide', calculadoraController.divisao);
router.post('/average', calculadoraController.media);
router.post('/sqrt', calculadoraController.raizQuadrada);
router.post('/sum-three', calculadoraController.somaDeTres);
router.post('/format-email', calculadoraController.formatarEmail);
router.post('/multiply-by-three', calculadoraController.multiplicarPorTres);
router.post('/average-five', calculadoraController.mediaCincoNumeros);

module.exports = router;
