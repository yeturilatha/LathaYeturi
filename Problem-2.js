// Problem-2: Generate a series of odd numbers based on input 'a'
// Input: a (integer)
// Output: series -> 1, 3, 5, 7, ...

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
  const series = [];
  for (let i = 1; i <= a; i++) {
    series.push(2 * i - 1);
  }

  console.log(`\nOutput: ${series.join(", ")}`);
  rl.close();
};
main();
