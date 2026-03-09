import readline from 'readline';
import Calculator from './Calculator.js';

const calc = new Calculator();
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const LINE = '─'.repeat(40);

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

function printResult(expression, result) {
  console.log(`  ${expression.padEnd(24)} = ${result}`);
}

function printError(expression, message) {
  console.log(`  ${expression.padEnd(24)} ✗ ${message}`);
}

function printHistory() {
  const history = calc.getHistory();
  if (history.length === 0) {
    console.log('  No operations yet.');
    return;
  }
  history.forEach((entry, i) => {
    console.log(`  ${i + 1}. ${entry.expression} = ${entry.result}`);
  });
}

function printMenu() {
  console.log(`\n┌${LINE}┐`);
  console.log(`│  ${'Basic Calculator'.padEnd(38)}│`);
  console.log(`├${LINE}┤`);
  console.log(`│  1. Add                               │`);
  console.log(`│  2. Subtract                          │`);
  console.log(`│  3. Multiply                          │`);
  console.log(`│  4. Divide                            │`);
  console.log(`│  5. Average of a list                 │`);
  console.log(`│  6. Show history                      │`);
  console.log(`│  7. Clear history                     │`);
  console.log(`│  0. Exit                              │`);
  console.log(`└${LINE}┘`);
}

async function getNumbers() {
  const a = parseFloat(await ask('  Enter first number: '));
  const b = parseFloat(await ask('  Enter second number: '));
  return { a, b };
}

async function main() {
  console.log('\n  Welcome to the Basic Calculator!');

  let running = true;

  while (running) {
    printMenu();
    const option = (await ask('\n  Select an option: ')).trim();

    console.log();

    switch (option) {
      case '1': {
        const { a, b } = await getNumbers();
        try { printResult(`${a} + ${b}`, calc.add(a, b)); }
        catch (e) { printError(`${a} + ${b}`, e.message); }
        break;
      }
      case '2': {
        const { a, b } = await getNumbers();
        try { printResult(`${a} - ${b}`, calc.subtract(a, b)); }
        catch (e) { printError(`${a} - ${b}`, e.message); }
        break;
      }
      case '3': {
        const { a, b } = await getNumbers();
        try { printResult(`${a} * ${b}`, calc.multiply(a, b)); }
        catch (e) { printError(`${a} * ${b}`, e.message); }
        break;
      }
      case '4': {
        const { a, b } = await getNumbers();
        try { printResult(`${a} / ${b}`, calc.divide(a, b)); }
        catch (e) { printError(`${a} / ${b}`, e.message); }
        break;
      }
      case '5': {
        const input = await ask('  Enter numbers separated by commas: ');
        const numbers = input.split(',').map((n) => parseFloat(n.trim()));
        try { printResult(`avg(${numbers.join(', ')})`, calc.average(numbers)); }
        catch (e) { printError('average', e.message); }
        break;
      }
      case '6':
        printHistory();
        break;
      case '7':
        calc.clearHistory();
        console.log('  History cleared.');
        break;
      case '0':
        console.log('  Goodbye!');
        running = false;
        break;
      default:
        console.log('  Invalid option. Please try again.');
    }
  }

  rl.close();
}

main();
