// ===============================================
// 🧮 07. Introduction to JavaScript Operators
// ===============================================
//
// Operators are special symbols that perform operations
// on operands (values or variables).
// Example: +, -, *, /, %, =, >, <, &&, ||, ? :
// ===============================================



// -----------------------------------------------
// 🔹 1. Arithmetic Operators
// -----------------------------------------------
// Used to perform basic mathematical calculations.
// + (Addition), - (Subtraction), * (Multiplication),
// / (Division), % (Modulus - gives remainder)

let a = 10;
let b = 5;

console.log(a + b); // 15 → Addition
console.log(a - b); // 5  → Subtraction
console.log(a * b); // 50 → Multiplication
console.log(a / b); // 2  → Division
console.log(a % b); // 0  → Modulus (remainder)



// -----------------------------------------------
// 🔹 2. Assignment Operators
// -----------------------------------------------
// Used to assign values to variables.
// Example: =, +=, -=, *=, /=, %=

let num = 10;
num = num + 5;   // or simply num += 5
console.log(num); // 15



// -----------------------------------------------
// 🔹 3. Comparison Operators
// -----------------------------------------------
// Used to compare two values and return a Boolean (true/false).
// Example: ==, ===, !=, !==, >, <, >=, <=

let x = 8;
let y = 12;

console.log(x == y);   // false → equal to
console.log(x != y);   // true  → not equal to
console.log(x > y);    // false → greater than
console.log(x < y);    // true  → less than
console.log(x >= y);   // false → greater than or equal
console.log(x <= y);   // true  → less than or equal



// -----------------------------------------------
// 🔹 4. Logical Operators
// -----------------------------------------------
// Used to combine or invert conditions.
// Example: && (AND), || (OR), ! (NOT)

let isStudent = true;
let hasID = false;

console.log(isStudent && hasID); // false → both must be true
console.log(isStudent || hasID); // true  → one must be true
console.log(!isStudent);         // false → negation



// -----------------------------------------------
// 🔹 5. Unary and Ternary Operators
// -----------------------------------------------

// 🧩 Unary Operator:
// Works with a single operand (++, --, typeof, !)
let count = 18;
count++; // Increment by 1
console.log(count); // 19


// 🎯 Ternary Operator:
// A shorthand for if-else statements.
// Syntax: condition ? valueIfTrue : valueIfFalse;

let age = 18;
let isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult); // Output: Adult
