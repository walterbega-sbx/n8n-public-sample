const somar = (req, res) => {
    const { valor1, valor2 } = req.body;
    const resultado = valor1 + valor2;
    res.send({ resultado });
}

const subtrair = (req, res) => {
    const { valor1, valor2 } = req.body;
    const resultado = valor1 - valor2;
    res.send({ resultado });
}

const multiplicar = (req, res) => {
    const { valor1, valor2 } = req.body;
    const resultado = valor1 * valor2;
    res.send({ resultado });
}

const dividir = (req, res) => {
    const { valor1, valor2 } = req.body;
    if (valor2 === 0) {
        res.status(400).send({ erro: "não é possível dividir por zero" });
    } else {
        const resultado = valor1 / valor2;
        res.send({ resultado });
    }
}

const percentual = (req, res) => {
    const { valor, percentual } = req.body;
    const resultado = (valor * percentual) / 100;
    res.send({ resultado });
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
    percentual
}
