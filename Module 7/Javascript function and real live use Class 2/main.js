/* 
===========================================
📘 JavaScript Function — Complete Guide
Author: S M Karimul Hassan
===========================================
💡 Topics:
1️⃣ What is a Function?
2️⃣ Real-life Use Cases
3️⃣ Passing Arguments
4️⃣ Returning Values
5️⃣ Named Functions
6️⃣ Anonymous Functions
7️⃣ Arrow Functions
8️⃣ Immediately Invoked Function Expressions (IIFE)
9️⃣ Generator Functions
🔟 Recursive Functions
===========================================
*/


// ===========================================
// 1️⃣ What is a Function?
// ===========================================
// 🔹 A function is a reusable block of code that performs a specific task.
// 🔹 It helps make code modular, readable, and maintainable.

function sayHello() {
  console.log("Hello, World!");
}
sayHello(); // Output: Hello, World!



// ===========================================
// 2️⃣ Real-life Use Cases
// ===========================================

// ✅ Example 1: A function that calculates total price in an e-commerce site
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total Price:", calculateTotal(500, 3)); // 1500

// ✅ Example 2: Function to greet users dynamically
function greetUser(username) {
  console.log(`Welcome back, ${username}!`);
}
greetUser("Shuvo");

// ✅ Example 3: Function to check login (simple simulation)
function login(email, password) {
  if (email === "admin@gmail.com" && password === "1234") {
    console.log("Login Successful ✅");
  } else {
    console.log("Invalid Credentials ❌");
  }
}
login("admin@gmail.com", "1234");



// ===========================================
// 3️⃣ Passing Arguments
// ===========================================
// 🔹 You can pass values to a function when calling it.
// 🔹 These values are called *arguments* and received as *parameters*.

function add(a, b) {
  console.log("Sum:", a + b);
}
add(10, 20); // Arguments passed: 10, 20



// ===========================================
// 4️⃣ Returning Values
// ===========================================
// 🔹 Functions can return a result using the `return` keyword.
// 🔹 Returned value can be stored or reused.

function multiply(x, y) {
  return x * y;
}
let result = multiply(5, 4);
console.log("Returned Value:", result); // Output: 20



// ===========================================
// 5️⃣ Named Functions
// ===========================================
// 🔹 These are regular functions that have a name identifier.
// 🔹 Useful for reusability and debugging.

function getArea(width, height) {
  return width * height;
}
console.log("Area:", getArea(10, 5));



// ===========================================
// 6️⃣ Anonymous Functions
// ===========================================
// 🔹 Functions without a name.
// 🔹 Usually assigned to variables or used as callbacks.

const sayBye = function() {
  console.log("Goodbye!");
};
sayBye();

// ✅ Example with setTimeout
setTimeout(function() {
  console.log("This runs after 2 seconds ⏰");
}, 2000);



// ===========================================
// 7️⃣ Arrow Functions (ES6)
// ===========================================
// 🔹 A shorter and cleaner way to write functions.
// 🔹 Arrow functions don’t bind their own `this`.

const addNumbers = (a, b) => a + b;
console.log("Arrow Function Result:", addNumbers(10, 5)); // Output: 15

// ✅ Arrow Function with Multiple Statements
const showDetails = (name, age) => {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
};
showDetails("Karimul", 22);

// ✅ Arrow Function as Callback
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log("Number:", num));



// ===========================================
// 8️⃣ Immediately Invoked Function Expressions (IIFE)
// ===========================================
// 🔹 A function that runs immediately after it’s defined.
// 🔹 Used to avoid polluting the global scope.

(function() {
  console.log("This IIFE runs immediately 🚀");
})();

// ✅ IIFE with parameters
((user) => {
  console.log(`Hello, ${user}! This runs instantly.`);
})("Shuvo");



// ===========================================
// 9️⃣ Generator Functions
// ===========================================
// 🔹 Special functions that can pause and resume execution using `yield`.
// 🔹 Defined using `function*` syntax.
// 🔹 Commonly used for creating iterators and asynchronous flows.

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().done);  // true (no more values)

// ✅ Real-life example: Generating IDs
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const generateID = idGenerator();
console.log("User ID:", generateID.next().value); // 1
console.log("User ID:", generateID.next().value); // 2
console.log("User ID:", generateID.next().value); // 3



// ===========================================
// 🔟 Recursive Functions
// ===========================================
// 🔹 A function that calls itself until a condition is met.
// 🔹 Commonly used for factorial, Fibonacci, traversing trees, etc.

// ✅ Example 1: Factorial Function
function factorial(n) {
  if (n === 1) return 1; // Base condition
  return n * factorial(n - 1); // Recursive call
}
console.log("Factorial of 5:", factorial(5)); // Output: 120

// ✅ Example 2: Countdown Function
function countdown(num) {
  if (num === 0) {
    console.log("Countdown Complete!");
    return;
  }
  console.log(num);
  countdown(num - 1);
}
countdown(5);


// ===========================================
// ✅ End of JavaScript Function File
// ===========================================
