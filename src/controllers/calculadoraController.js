
class CalculadoraController {
    soma(req, res) {
        const { a, b } = req.body;
        if (a === undefined || b === undefined) {
            return res.status(400).json({ error: "É necessário fornecer dois números (a e b) no corpo da requisição." });
        }
        if (typeof a !== "number" || typeof b !== "number") {
            return res.status(400).json({ error: "Os valores de 'a' e 'b' devem ser números." });
        }
        const resultado = a + b;
        return res.json({ resultado });
    }
    subtracao(req, res) {
        const { a, b } = req.body;
        if (a === undefined || b === undefined) {
            return res.status(400).json({ error: "É necessário fornecer dois números (a e b) no corpo da requisição." });
        }
        if (typeof a !== "number" || typeof b !== "number") {
            return res.status(400).json({ error: "Os valores de 'a' e 'b' devem ser números." });
        }
        const resultado = a - b;
        return res.json({ resultado });
    }
    multiplicacao(req, res) {
        const { a, b } = req.body;
        if (a === undefined || b === undefined) {
            return res.status(400).json({ error: "É necessário fornecer dois números (a e b) no corpo da requisição." });
        }
        if (typeof a !== "number" || typeof b !== "number") {
            return res.status(400).json({ error: "Os valores de 'a' e 'b' devem ser números." });
        }
        const resultado = a * b;
        return res.json({ resultado });
    }
    divisao(req, res) {
        const { a, b } = req.body;
        if (a === undefined || b === undefined) {
            return res.status(400).json({ error: "É necessário fornecer dois números (a e b) no corpo da requisição." });
        }
        if (typeof a !== "number" || typeof b !== "number") {
            return res.status(400).json({ error: "Os valores de 'a' e 'b' devem ser números." });
        }
        if (b === 0) {
            return res.status(400).json({ error: "Não é possível dividir por zero." });
        }
        const resultado = a / b;
        return res.json({ resultado });
    }
    media(req, res) {
        const { a, b } = req.body;
        if (a === undefined || b === undefined) {
            return res.status(400).json({ error: "É necessário fornecer dois números (a e b) no corpo da requisição." });
        }
        if (typeof a !== "number" || typeof b !== "number") {
            return res.status(400).json({ error: "Os valores de 'a' e 'b' devem ser números." });
        }
        const resultado = (a + b) / 2;
        return res.json({ resultado });
    }
}
module.exports = new CalculadoraController();
