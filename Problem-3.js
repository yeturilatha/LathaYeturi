// Problem-3: Generate a specific series of odd numbers based on input 'a'
// Input: a (integer)
// Output: series -> Follows the rule:
//   If 'a' is odd  -> print first 'a' odd numbers
//   If 'a' is even -> print first (a - 1) odd numbers

import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const ask = (question) => new Promise((resolve) => rl.question(question, resolve));
const main = async () => {
  const input = await ask("Enter a positive integer (a): ");
  const a = parseInt(input);
  if (isNaN(a) || a <= 0) {
    console.log("Please enter a valid positive integer.");
    rl.close();
    return;
  }
  const limit = a % 2 === 0 ? a - 1 : a;
  const series = [];
  for (let i = 1; i <= limit; i++) {
    series.push(2 * i - 1);
  }
console.log(`\n Output: ${series.join(", ")}`);
  rl.close();
};
main();
