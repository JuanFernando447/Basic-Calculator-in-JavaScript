import { validateNumber, validateDivision } from './utils.js';

function add(a, b) {
  validateNumber(a);
  validateNumber(b);
  return a + b;
}

function subtract(a, b) {
  validateNumber(a);
  validateNumber(b);
  return a - b;
}

function multiply(a, b) {
  validateNumber(a);
  validateNumber(b);
  return a * b;
}

function divide(a, b) {
  validateNumber(a);
  validateNumber(b);
  validateDivision(b);
  return a / b;
}

// Usage examples
console.log('=== Basic Calculator ===');
console.log('10 + 5 =', add(10, 5));
console.log('10 - 5 =', subtract(10, 5));
console.log('10 * 5 =', multiply(10, 5));
console.log('10 / 5 =', divide(10, 5));

try {
  console.log('10 / 0 =', divide(10, 0));
} catch (e) {
  console.log('Expected error:', e.message);
}

export { add, subtract, multiply, divide };
