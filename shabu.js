// Multiplication table in JavaScript (no user input)

// Change this value to print a different table
const number = 7;

// Print "number x i = result" for i = 1..10
function printTable(n, upto = 10) {
  for (let i = 1; i <= upto; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

printTable(number);
