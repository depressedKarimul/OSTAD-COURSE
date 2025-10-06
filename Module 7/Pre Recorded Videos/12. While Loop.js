// ===============================================
// 🔁 12. While Loop in JavaScript
// ===============================================
//
// The 'while' loop repeatedly executes a block of code
// as long as a given condition evaluates to true.
//
// Syntax:
// while (condition) {
//     // Code to execute
// }
//
// ⚠️ Important: Make sure the condition will eventually
// become false, otherwise the loop will run forever.
// ===============================================



// -----------------------------------------------
// 🔹 Example: Print Numbers from 1 to 10
// -----------------------------------------------

let number = 1; // Initialization

// Loop will continue as long as number <= 10
while (number <= 10) {
  console.log("Number is:", number);
  number++; // Increment to avoid infinite loop
}

// ✅ Output:
// Number is: 1
// Number is: 2
// ...
// Number is: 10
