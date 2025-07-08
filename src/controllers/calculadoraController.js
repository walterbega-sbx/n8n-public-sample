const calculadora = require('../calculadora');

const somar = (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = calculadora.somar(num1, num2);
    res.send({ resultado });
};

const subtrair = (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = calculadora.subtrair(num1, num2);
    res.send({ resultado });
};

const multiplicar = (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = calculadora.multiplicar(num1, num2);
    res.send({ resultado });
};

const dividir = (req, res) => {
    const { num1, num2 } = req.body;
    if (num2 === 0) {
        return res.status(400).send({ error: 'Não é possível dividir por zero' });
    }
    const resultado = calculadora.dividir(num1, num2);
    res.send({ resultado });
};

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
};