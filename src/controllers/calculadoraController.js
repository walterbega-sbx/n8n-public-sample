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
    raizQuadrada(req, res) {
        const { a } = req.body;
        if (a === undefined) {
            return res.status(400).json({ error: "É necessário fornecer um número (a) no corpo da requisição." });
        }
        if (typeof a !== "number") {
            return res.status(400).json({ error: "O valor de 'a' deve ser um número." });
        }
        if (a < 0) {
            return res.status(400).json({ error: "Não é possível calcular a raiz quadrada de um número negativo." });
        }
        const resultado = Math.sqrt(a);
        return res.json({ resultado });
    }
    somaDeTres(req, res) {
        const { a, b, c } = req.body;
        if (a === undefined || b === undefined || c === undefined) {
            return res.status(400).json({ error: "É necessário fornecer três números (a, b e c) no corpo da requisição." });
        }
        if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
            return res.status(400).json({ error: "Os valores de 'a', 'b' e 'c' devem ser números." });
        }
        const resultado = (a + b + c) / 3;
        return res.json({ resultado });
    }

    formatarEmail(req, res) {
        const { titulo, subtitulo, corpo } = req.body;
        if (!titulo || !subtitulo || !corpo) {
            return res.status(400).json({
                error: "É necessário fornecer título, subtítulo e corpo no corpo da requisição."
            });
        }
        const emailFormatado = `
      Titulo: ${titulo}
      Subtítulo: ${subtitulo}
      Corpo: ${corpo}
    `
        return res.json({ email: emailFormatado });
    }

    multiplicarPorTres(req, res) {
        const { a, b } = req.body;
        if (a === undefined || b === undefined) {
            return res.status(400).json({ error: "É necessário fornecer dois números (a e b) no corpo da requisição." });
        }
        if (typeof a !== "number" || typeof b !== "number") {
            return res.status(400).json({ error: "Os valores de 'a' e 'b' devem ser números." });
        }
        const resultado = (a * b) * 3;
        return res.json({ resultado });
    }

    mediaCincoNumeros(req, res) {
        const { a, b, c, d, e } = req.body;
        if (a === undefined || b === undefined || c === undefined || d === undefined || e === undefined) {
            return res.status(400).json({ error: "É necessário fornecer cinco números (a, b, c, d e e) no corpo da requisição." });
        }
        if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number" || typeof d !== "number" || typeof e !== "number") {
            return res.status(400).json({ error: "Todos os valores devem ser números." });
        }
        const resultado = (a + b + c + d + e) / 5;
        return res.json({ resultado });
    }
}
module.exports = new CalculadoraController();