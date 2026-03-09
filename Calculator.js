import Validator from './Validator.js';

class Calculator {
  constructor() {
    this.history = [];
  }

  #record(expression, result) {
    this.history.push({ expression, result });
  }

  add(a, b) {
    Validator.isNumber(a);
    Validator.isNumber(b);
    const result = a + b;
    this.#record(`${a} + ${b}`, result);
    return result;
  }

  subtract(a, b) {
    Validator.isNumber(a);
    Validator.isNumber(b);
    const result = a - b;
    this.#record(`${a} - ${b}`, result);
    return result;
  }

  multiply(a, b) {
    Validator.isNumber(a);
    Validator.isNumber(b);
    const result = a * b;
    this.#record(`${a} * ${b}`, result);
    return result;
  }

  divide(a, b) {
    Validator.isNumber(a);
    Validator.isNumber(b);
    Validator.isNotZero(b);
    const result = a / b;
    this.#record(`${a} / ${b}`, result);
    return result;
  }

  average(numbers) {
    Validator.isNonEmptyArray(numbers);
    numbers.forEach(Validator.isNumber);
    const result = numbers.reduce((acc, n) => acc + n, 0) / numbers.length;
    this.#record(`avg(${numbers.join(', ')})`, result);
    return result;
  }

  getHistory() {
    return this.history;
  }

  clearHistory() {
    this.history = [];
  }
}

export default Calculator;
