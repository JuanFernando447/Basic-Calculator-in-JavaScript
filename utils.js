function validarNumero(valor) {
  if (typeof valor !== 'number' || isNaN(valor)) {
    throw new Error(`El valor "${valor}" no es un número válido.`);
  }
}

function validarDivision(divisor) {
  if (divisor === 0) {
    throw new Error('No se puede dividir entre cero.');
  }
}

function calcularPromedio(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error('Se requiere un arreglo con al menos un número.');
  }
  numeros.forEach(validarNumero);
  const suma = numeros.reduce((acc, n) => acc + n, 0);
  return suma / numeros.length;
}

function encontrarMaximo(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error('Array must contain at least one number.');
  }
  numeros.forEach(validarNumero);
  return Math.max(...numeros);
}

function encontrarMinimo(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error('Array must contain at least one number.');
  }
  numeros.forEach(validarNumero);
  return Math.min(...numeros);
}

module.exports = { validarNumero, validarDivision, calcularPromedio, encontrarMaximo, encontrarMinimo };
