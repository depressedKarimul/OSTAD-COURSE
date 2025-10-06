// ===============================================
// 🧱 17. JavaScript Objects
// ===============================================
//
// In JavaScript, an *object* is a collection of key-value pairs.
// Each key (called a property) stores a value — which can be
// a primitive value, another object, or even a function.
//
// Syntax:
// let objectName = {
//     key1: value1,
//     key2: value2,
//     key3: function() { ... }
// };
// ===============================================



// -----------------------------------------------
// 🔹 Example: Object Declaration
// -----------------------------------------------

let student = {
  name: "Shuvo",
  age: 18,
  className: "Twelve",
  roll: 5,

  // Method inside the object
  greet: function () {
    console.log("Hello");
  }
};



// -----------------------------------------------
// 🔹 Accessing Object Properties
// -----------------------------------------------

// Using dot notation
console.log(student.name);       // Output: Shuvo
console.log(student.className);  // Output: Twelve
console.log(student.roll);       // Output: 5

// Using bracket notation (useful for dynamic property names)
console.log(student["roll"]);    // Output: 5



// -----------------------------------------------
// 🔹 Adding & Deleting Object Properties
// -----------------------------------------------

// Add a new property
student.subject = "Math";

// Delete an existing property
// delete student.roll;

console.log(student.subject);    // Output: Math
console.log(student);            // Shows full updated object



// -----------------------------------------------
// 🔹 Calling Object Methods
// -----------------------------------------------

student.greet(); // Output: Hello
