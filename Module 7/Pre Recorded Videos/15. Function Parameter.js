// ===============================================
// 🧩 15. Function Parameters and Arguments in JavaScript
// ===============================================
//
// 🔹 Parameters:
//     Variables listed inside the parentheses () in a function definition.
// 🔹 Arguments:
//     Actual values passed to the function when it is called.
//
// Functions with parameters allow us to reuse the same logic
// with different input values.
// ===============================================



// -----------------------------------------------
// 🔹 Example 1: Function with Parameters (No Return)
// -----------------------------------------------
// Adds two numbers and displays the result.

function add(num1, num2) {
  let sum = num1 + num2; // Store the result in a local variable
  console.log("Sum is:", sum);
}

// Calling the function with arguments
add(5, 10); // Output: Sum is: 15



// -----------------------------------------------
// 🔹 Example 2: Function with Return Value
// -----------------------------------------------
// Subtracts one number from another and returns the result.

function sub(num1, num2) {
  let result = num1 - num2;
  return result; // Sends the value back to where the function was called
}

// Using console.log to print the returned value
console.log("Subtraction Result:", sub(4, 1)); // Output: Subtraction Result: 3



// -----------------------------------------------
// 🔹 Example 3: Function with String Parameter
// -----------------------------------------------
// Displays a greeting message using the provided name.

function sayHello(name) {
  console.log("Hey, I am", name);
}

// Calling the function with an argument
sayHello("Shuvo"); // Output: Hey, I am Shuvo
