// Problem-4: Count numbers that are multiples of 1–9
// Input: array of integers
// Output: an object showing how many numbers in the array are divisible by each number (1–9)

import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const ask = (question) => new Promise((resolve) => rl.question(question, resolve));
const main = async () => {
  const input = await ask("Enter numbers separated by commas (e.g. 1,2,8,9,12,46,76,82,15,20,30): ");
  const numbers = input.split(",").map(num => parseInt(num.trim())).filter(num => !isNaN(num));
  if (numbers.length === 0) {
    console.log("Please enter a valid list of numbers.");
    rl.close();
    return;
  }
  const result = {};
  for (let i = 1; i <= 9; i++) {
    const count = numbers.filter(num => num % i === 0).length;
    result[i] = count;
  }
  console.log("\n Output:");
  console.log(result);
  rl.close();
};
main();
