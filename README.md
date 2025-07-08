# Simple Calculator

This is a simple calculator application written in Node.js.

## Usage

To use the calculator, you can import the `calculator` object from the `calculator.js` file.

```javascript
const calculator = require('./calculator');

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(5, 3)); // 2
console.log(calculator.multiply(5, 3)); // 15
console.log(calculator.divide(5, 3)); // 1.666...
```

## API

The calculator object has the following methods:

*   `add(a, b)`: Adds two numbers.
*   `subtract(a, b)`: Subtracts two numbers.
*   `multiply(a, b)`: Multiplies two numbers.
*   `divide(a, b)`: Divides two numbers.
