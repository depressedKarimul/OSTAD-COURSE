/* 
===========================================
📘 JavaScript Full Basics Documentation
Author: S M Karimul Hassan
===========================================

🧠 Topics Covered:
1️⃣ JavaScript Introduction
2️⃣ Variables
3️⃣ Operators
4️⃣ Comments
5️⃣ Data Types
6️⃣ If-Else Statements
7️⃣ Switch Case Statements
8️⃣ For Loops
9️⃣ While Loops
🔟 Do-While Loops
1️⃣1️⃣ For-In Loops
===========================================
*/


// ===========================================
// 1️⃣ JavaScript Introduction 💡
// ===========================================

// JavaScript is a high-level, dynamic programming language
// used to make websites interactive, functional, and smart.

console.log("Hello World! 👋"); // Prints output to console
console.log(4 + 5); // Basic arithmetic operation


// ===========================================
// 2️⃣ Variables in JavaScript 🧩
// ===========================================

// Variables are used to store data values.
// We can declare variables using let, const, or var.

let name = "Hassan";
const age = 22;
var country = "Bangladesh";

console.log(name, age, country);


// ===========================================
// 3️⃣ Operators in JavaScript ➕➖
// ===========================================

// Arithmetic Operators: +, -, *, /, %, **
let x = 10;
let y = 3;
console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Remainder:", x % y);
console.log("Power:", x ** y);

// Comparison Operators: >, <, >=, <=, ==, ===, !=, !==
console.log(x > y);
console.log(x === 10);

// Logical Operators: &&, ||, !
console.log(x > 5 && y < 5);
console.log(!(x < 5));


// ===========================================
// 4️⃣ Comments in JavaScript 💬
// ===========================================

// Single-line comment → // Used for one-line notes
/* 
Multi-line comment → Used for explaining 
multiple lines or sections in detail 
*/


// ===========================================
// 5️⃣ Data Types 🧠
// ===========================================

// JavaScript has 7 primitive data types:
// Number, String, Boolean, Undefined, Null, Symbol, BigInt

let num = 10;                  // Number
let str = "Hello";             // String
let isTrue = true;             // Boolean
let notDefined;                // Undefined
let emptyValue = null;         // Null

console.log(typeof num);
console.log(typeof str);
console.log(typeof isTrue);


// ===========================================
// 6️⃣ If-Else Statements 🧭
// ===========================================

// Used to perform actions based on conditions

let number = 8;

if (number % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}


// ===========================================
// 7️⃣ Switch Case Statements 🔁
// ===========================================

// Used as an alternative to multiple if-else blocks

function whichNumber() {
  return 4;
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
// 8️⃣ For Loop 🔂
// ===========================================

// Used when you know how many times to repeat

function doForLoop() {
  for (let i = 1; i <= 5; i++) {
    console.log("For Loop Count:", i);
  }
}

doForLoop();


// ===========================================
// 9️⃣ While Loop 🔁
// ===========================================

// Executes while the condition is TRUE

function doWhileLoop() {
  let i = 1;
  while (i <= 5) {
    console.log("While Loop Count:", i);
    i++;
  }
}

doWhileLoop();


// ===========================================
// 🔟 Do-While Loop 🔄
// ===========================================

// Executes at least once before checking condition

function doDoWhileLoop() {
  let i = 1;
  do {
    console.log("Do-While Count:", i);
    i++;
  } while (i <= 5);
}

doDoWhileLoop();


// ===========================================
// 1️⃣1️⃣ For-In Loop 🧭
// ===========================================

// Used to iterate over the properties of an object

let person = {
  name: "Karimul",
  nickname: ["Hassan", "Shuvo", "Korim Bhai"],
  cgpa: 3.33,
  semester: 9,

  hisFather: {
    name: "Shoaib",
    age: 55,
  },
};

console.log("*********************************");

for (let key in person) {
  console.log(key, ":", person[key]);
}

console.log("*********************************");


// ===========================================
// 🧮 Arrays in JavaScript
// ===========================================

// Arrays store multiple values in one variable
let numbers = [1, 2, 3, 4];
console.log(numbers);
console.log("Second item:", numbers[1]);

// For-Of Loop (to iterate array elements)
for (let item of numbers) {
  console.log("Array item:", item);
}


// ===========================================
// 📘 END OF DOCUMENT
// ===========================================

console.log("✅ All JavaScript Basics Covered Successfully!");
