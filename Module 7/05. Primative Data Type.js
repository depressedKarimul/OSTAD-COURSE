// =======================================================
// 🧠 JavaScript Primitive Data Types
// =======================================================
//
// 📘 What are Primitive Data Types?
// ---------------------------------
// Primitive data types are the most basic data types in JavaScript.
// They represent single, immutable values — meaning their values
// cannot be changed directly. When you assign or copy a primitive value,
// it creates a new copy in memory (passed by value).
//
// JavaScript has 7 primitive data types:
//
// 1️⃣ Number
// 2️⃣ String
// 3️⃣ Boolean
// 4️⃣ Undefined
// 5️⃣ Null
// 6️⃣ Symbol
// 7️⃣ BigInt
//
// =======================================================


// 🔢 1. Number
// Used to represent both integer and floating-point numbers.

let num = 10;          // Integer
let num_1 = 1.5;       // Floating-point number
console.log(num, num_1);


// 🔤 2. String
// Represents a sequence of characters enclosed in quotes ("" or '').

let str = "Hello World";
let str_1 = 'Shuvo';
let str_2 = '55';
console.log(str, str_1, str_2);


// ✅ 3. Boolean
// Represents a logical value: true or false.

let bool = true;
let bool_2 = false;
console.log(bool, bool_2);


// ❓ 4. Undefined
// A variable declared but not assigned any value is 'undefined'.

let x;
console.log(x); // Output: undefined


// ⚫ 5. Null
// Represents an intentional absence of any object value.

let data = null;
console.log(data); // Output: null


// 🧩 6. Symbol
// Represents a unique and immutable identifier, often used as object keys.

let sym = Symbol("Hello World");
console.log(sym);


// 💪 7. BigInt
// Used for representing integers larger than what the Number type can safely store.

let bigInt = 55555555555555555555555555555555555555555555555555555555555n;
console.log(bigInt);
