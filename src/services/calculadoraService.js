class CalculadoraService {

    async somar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Parâmetros inválidos.');
        }
        return num1 + num2;
    }

    async subtrair(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Parâmetros inválidos.');
        }
        return num1 - num2;
    }

    async multiplicar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Parâmetros inválidos.');
        }
        return num1 * num2;
    }

    async dividir(num1, num2) {
        if (isNaN(num1) || isNaN(num2) || num2 === 0) {
            throw new Error('Parâmetros inválidos.');
        }
        return num1 / num2;
    }

    async raizQuadrada(num) {
        if (isNaN(num) || num < 0) {
            throw new Error('Parâmetro inválido. O número não pode ser negativo.');
        }
        return Math.sqrt(num);
    }

    async mediaCincoNumeros(num1, num2, num3, num4, num5) {
        if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
            throw new Error('Todos os parâmetros devem ser números válidos.');
        }
        const soma = num1 + num2 + num3 + num4 + num5;
        return soma / 5;
    }

}

module.exports = new CalculadoraService();