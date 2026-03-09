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

// Ejemplo de uso del promedio
console.log('=== Promedio ===');
const lista = [8, 6, 9, 7, 10];
console.log('Lista:', lista);
console.log('Promedio:', calcularPromedio(lista));

module.exports = { validarNumero, validarDivision, calcularPromedio };
