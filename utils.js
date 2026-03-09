function validateNumber(value) {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error(`The value "${value}" is not a valid number.`);
  }
}

function validateDivision(divisor) {
  if (divisor === 0) {
    throw new Error('Cannot divide by zero.');
  }
}

function calculateAverage(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('An array with at least one number is required.');
  }
  numbers.forEach(validateNumber);
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  return sum / numbers.length;
}

function findMax(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('Array must contain at least one number.');
  }
  numbers.forEach(validateNumber);
  return Math.max(...numbers);
}

function findMin(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('Array must contain at least one number.');
  }
  numbers.forEach(validateNumber);
  return Math.min(...numbers);
}

export { validateNumber, validateDivision, calculateAverage, findMax, findMin };
