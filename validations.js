import { calculateAverage } from './utils.js';

// Validate division by zero
function testDivisionByZero() {
  console.log('=== Division by Zero Validation ===');
  const cases = [
    { a: 10, b: 0 },
    { a: -5, b: 0 },
    { a: 0, b: 0 },
  ];

  cases.forEach(({ a, b }) => {
    try {
      if (b === 0) throw new Error('Cannot divide by zero.');
      console.log(`${a} / ${b} = ${a / b}`);
    } catch (e) {
      console.log(`${a} / ${b} => Error: ${e.message}`);
    }
  });
}

// Validate that input is a valid number
function testInputValidation() {
  console.log('\n=== Input Validation ===');
  const inputs = [42, 'hello', null, undefined, NaN, 3.14];

  inputs.forEach((val) => {
    const isValid = typeof val === 'number' && !isNaN(val);
    console.log(`Input: ${JSON.stringify(val)} => ${isValid ? 'Valid' : 'Invalid'}`);
  });
}

// Show average of a number list
function testAverage() {
  console.log('\n=== Average Calculator ===');
  const lists = [
    [5, 8, 9, 6, 10],
    [100, 200, 300],
    [7],
  ];

  lists.forEach((list) => {
    const avg = calculateAverage(list);
    console.log(`List: [${list}] => Average: ${avg}`);
  });
}

testDivisionByZero();
testInputValidation();
testAverage();
