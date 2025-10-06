// ===============================================
// 🔁 10. Basic For Loop in JavaScript
// ===============================================
//
// A 'for' loop is used to execute a block of code repeatedly,
// as long as a specified condition is true.
//
// Syntax:
// for(initialization; condition; increment/decrement) {
//     // Code to execute
// }
//
// Explanation:
// 1️⃣ Initialization → Runs once before the loop starts.
// 2️⃣ Condition → Checked before each iteration. If false, loop ends.
// 3️⃣ Increment/Decrement → Updates the counter after each iteration.
// ===============================================



// -----------------------------------------------
// 🔹 Example 1: Print Numbers from 0 to 10
// -----------------------------------------------
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// ✅ Output: 0, 1, 2, ..., 10



// -----------------------------------------------
// 🔹 Example 2: Print Custom Messages
// -----------------------------------------------
// Prints a message along with the current loop counter.
for (let i = 0; i <= 50; i++) {
  console.log(i, ": Hello Bangladesh");
}
// ✅ Output Example:
// 0 : Hello Bangladesh
// 1 : Hello Bangladesh
// ...
// 50 : Hello Bangladesh
