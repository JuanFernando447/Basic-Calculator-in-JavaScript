const { validarNumero, validarDivision } = require('./utils');

function sumar(a, b) {
  validarNumero(a);
  validarNumero(b);
  return a + b;
}

function restar(a, b) {
  validarNumero(a);
  validarNumero(b);
  return a - b;
}

function multiplicar(a, b) {
  validarNumero(a);
  validarNumero(b);
  return a * b;
}

function dividir(a, b) {
  validarNumero(a);
  validarNumero(b);
  validarDivision(b);
  return a / b;
}

// Ejemplos de uso
console.log('=== Calculadora Básica ===');
console.log('10 + 5 =', sumar(10, 5));
console.log('10 - 5 =', restar(10, 5));
console.log('10 * 5 =', multiplicar(10, 5));
console.log('10 / 5 =', dividir(10, 5));

try {
  console.log('10 / 0 =', dividir(10, 0));
} catch (e) {
  console.log('Error esperado:', e.message);
}

module.exports = { sumar, restar, multiplicar, dividir };
