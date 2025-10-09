/* 
===========================================
📘 JavaScript Full Basics Documentation

===========================================
💡 Topics:
1. JavaScript Introduction
2. Variables
3. Operators
4. Comments
5. Data Types (Primitive + Non-Primitive)
6. If-Else Statements
7. Switch Case
8. For Loop
9. While Loop
10. Do-While Loop
11. For-In Loop
===========================================
*/


// ===========================================
// 1️⃣ JavaScript Introduction
// ===========================================
// JavaScript is a programming language used to make web pages interactive.

console.log("Hello World");
console.log(4 + 5);

// ===========================================
// 2️⃣ Variables
// ===========================================
// Variables store data values. Use let, const, or var.

let name = "Karimul";   // String
const age = 22;         // Constant (cannot be changed)
var country = "Bangladesh"; // Global scope variable (older use)

console.log(name, age, country);


// ===========================================
// 3️⃣ Operators ⚙️
// ===========================================
// Operators perform operations on values and variables.

let x = 10;
let y = 5;

console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus:", x % y);
console.log("Comparison:", x > y);
console.log("Logical:", x > 5 && y < 10);


// ===========================================
// 4️⃣ Comments 💬
// ===========================================
// Comments make code readable and are ignored by the compiler.
// Single-line comment → //
// Multi-line comment → /*  */

// Example:
// This is a single-line comment
/* This is a
   multi-line comment */


// ===========================================
// 5️⃣ Data Types 🧠
// ===========================================
// JavaScript has two main categories of data types:
// 👉 Primitive and Non-Primitive (Reference)


// -------------------------------------------
// 5️⃣.1 Primitive Data Types
// -------------------------------------------

let num = 10;                  // Number
let str = "Hello";             // String
let isTrue = true;             // Boolean
let notDefined;                // Undefined
let emptyValue = null;         // Null
let uniqueId = Symbol("id");   // Symbol (unique value)
let bigNum = 9007199254740991n; // BigInt (large integer)

console.log("Primitive Types:");
console.log(typeof num, typeof str, typeof isTrue, typeof notDefined, typeof emptyValue, typeof uniqueId, typeof bigNum);


// -------------------------------------------
// 5️⃣.2 Non-Primitive Data Types (Reference) 🧩
// -------------------------------------------

// 🔸 Object → Used to store data in key-value pairs
let student = {
  name: "Hassan",
  age: 22,
  dept: "CSE",
};
console.log("Object Example:", student);
console.log("Access value:", student.name);

// 🔸 Array → Ordered collection of items
let fruits = ["Apple", "Mango", "Banana"];
console.log("Array Example:", fruits);
console.log("Access 2nd item:", fruits[1]);

// 🔸 Function → Block of reusable code
function greet() {
  return "Hello from Function 👋";
}
console.log("Function Example:", greet());
console.log("Function Type:", typeof greet);


// ✅ All Non-Primitive data types are *objects* in JS
console.log(typeof fruits);   // object
console.log(typeof student);  // object
console.log(typeof greet);    // function (special object)


// ===========================================
// 6️⃣ If-Else Statement 🔀
// ===========================================
// Used for decision making in JS.

let number = 2;

if (number % 2 == 0) {
  console.log("Even number");
} else if (number % 2 != 0) {
  console.log("Odd number");
} else {
  console.log("Not a valid number");
}


// ===========================================
// 7️⃣ Switch Case 🧭
// ===========================================
// Used when you have multiple possible values to check.

function whichNumber() {
  let num = 4;
  return num;
}

switch (whichNumber()) {
  case 1:
    console.log("Number is 1");
    break;
  case 2:
    console.log("Number is 2");
    break;
  case 3:
    console.log("Number is 3");
    break;
  case 4:
    console.log("Number is 4");
    break;
  default:
    console.log("Number not found");
    break;
}


// ===========================================
// 8️⃣ For Loop 🔁
// ===========================================
// Used when you know how many times to run the loop.

function doForLoop() {
  for (let i = 1; i <= 5; i++) {
    console.log("For Loop Count:", i);
  }
}
doForLoop();


// ===========================================
// 9️⃣ While Loop 🔂
// ===========================================
// Used when you don’t know how many times to run the loop in advance.

function doWhileLoop() {
  let i = 1;
  while (i <= 5) {
    console.log("While Loop Count:", i);
    i++;
  }
}
doWhileLoop();


// ===========================================
// 🔟 Do-While Loop ♻️
// ===========================================
// Similar to while loop, but runs at least once.

function doDoWhileLoop() {
  let i = 1;
  do {
    console.log("Do-While Loop Count:", i);
    i++;
  } while (i <= 5);
}
doDoWhileLoop();


// ===========================================
// 1️⃣1️⃣ For-In Loop 🧾
// ===========================================
// Used to loop through object properties.

let person = {
  name: "Karimul",
  nickname: ["Hassan", "Shuvo", "Korim Bhai"],
  cgpa: 3.33,
  semester: 9,
  father: {
    name: "Shoaib",
    age: 55,
  },
};

console.log("********* Person Info *********");
for (let key in person) {
  console.log(key, ":", person[key]);
}

console.log("*********************************");


// ===========================================
// ✅ End of JavaScript Basics File
// ===========================================
