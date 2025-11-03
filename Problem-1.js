// Problem-1: Calculator using Class
// Performs Addition, Subtraction, Multiplication, and Division
// Inputs: a (double), b (double), operation (string)

import readline from "readline";
class Calculator {
  constructor(a, b) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
  }
  calculate(operation) {
    const op = operation.toLowerCase();
    const operations = {
      add: this.a + this.b,
      "+": this.a + this.b,
      subtract: this.a - this.b,
      "-": this.a - this.b,
      multiply: this.a * this.b,
      "*": this.a * this.b,
      divide: this.b !== 0 ? this.a / this.b : "Division by zero not allowed",
      "/": this.b !== 0 ? this.a / this.b : " Division by zero not allowed",
    };
    return operations[op] ?? "Invalid operation type";
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));
const main = async () => {
  const a = await ask("Enter first number (a): ");
  const b = await ask("Enter second number (b): ");
  const operation = await ask("Enter operation (add, subtract, multiply, divide): ");
  const calc = new Calculator(a, b);
  const result = calc.calculate(operation);
  console.log(`\n Result: ${result}`);
  rl.close();
};
main();
