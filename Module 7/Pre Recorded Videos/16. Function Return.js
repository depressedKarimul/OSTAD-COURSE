// ===============================================
// 🔙 16. Function Return in JavaScript
// ===============================================
//
// The `return` statement is used to send a value back
// from a function to the place where it was called.
//
// 🧠 Key Points:
// - A function can return a single value.
// - Once `return` executes, the function stops immediately.
// - Returned values can be stored in variables or used in expressions.
// ===============================================



// -----------------------------------------------
// 🔹 Example 1: Function Returning a Value
// -----------------------------------------------

function addNumbers(a, b) {
  return a + b; // Returns the sum of two numbers
}



// -----------------------------------------------
// 🔹 Example 2: Another Function Returning a Value
// -----------------------------------------------

function subNumber(a, b) {
  return a - b; // Returns the subtraction result
}



// -----------------------------------------------
// 🔹 Example 3: Using Returned Values in Expressions
// -----------------------------------------------
// You can use the return values of functions directly
// in mathematical expressions or assign them to variables.

let sum = addNumbers(5, 55) * subNumber(44, 12);

// Step-by-step:
// addNumbers(5,55) → 60
// subNumber(44,12) → 32
// 60 * 32 = 1920

console.log("Final Result:", sum); // ✅ Output: Final Result: 1920
