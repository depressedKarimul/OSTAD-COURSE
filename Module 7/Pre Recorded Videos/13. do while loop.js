// ===============================================
// 🔁 13. Do...While Loop in JavaScript
// ===============================================
//
// The 'do...while' loop is similar to the 'while' loop,
// but with one key difference:
// 👉 It executes the block of code *at least once*,
// even if the condition is false.
//
// Syntax:
// do {
//     // Code to execute
// } while (condition);
// ===============================================



// -----------------------------------------------
// 🔹 Example: Print Numbers from 1 to 5
// -----------------------------------------------

let number = 1;

// The loop runs once before checking the condition
do {
  console.log("The number is:", number);
  number++; // Increment counter
} while (number <= 5);

// ✅ Output:
// The number is: 1
// The number is: 2
// The number is: 3
// The number is: 4
// The number is: 5
