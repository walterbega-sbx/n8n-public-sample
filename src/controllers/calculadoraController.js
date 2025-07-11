const calculadoraService = require('../services/calculadoraService');

class CalculadoraController {

    async somar(req, res) {
        try {
            const { num1, num2 } = req.body;
            const resultado = await calculadoraService.somar(num1, num2);
            res.status(200).json({ resultado });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async subtrair(req, res) {
        try {
            const { num1, num2 } = req.body;
            const resultado = await calculadoraService.subtrair(num1, num2);
            res.status(200).json({ resultado });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async multiplicar(req, res) {
        try {
            const { num1, num2 } = req.body;
            const resultado = await calculadoraService.multiplicar(num1, num2);
            res.status(200).json({ resultado });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async dividir(req, res) {
        try {
            const { num1, num2 } = req.body;
            const resultado = await calculadoraService.dividir(num1, num2);
            res.status(200).json({ resultado });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async raizQuadrada(req, res) {
        try {
            const { num } = req.body;
            const resultado = await calculadoraService.raizQuadrada(num);
            res.status(200).json({ resultado });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

module.exports = new CalculadoraController();