// ================================
// 🌟 Non-Primitive Data Types in JavaScript
// ================================
//
// Unlike primitive data types (Number, String, Boolean, etc.),
// non-primitive data types can store multiple values and are mutable.
// Common examples: Objects, Arrays, and Functions
// =============================================


// 🧍‍♂️ Object Example
// An object stores data in key-value pairs.
const student = {
  name: "Rakib",
  age: 20,
  isPassed: true
};

// Accessing object properties using dot notation
console.log(student.name); // Output: Rakib
console.log(student.age);  // Output: 20



// 🍎 Array Example
// An array holds an ordered list of values (can be of any data type).
const fruits = ["Mango", "Banana", "Apple"];

// Accessing array elements using index (0-based)
console.log(fruits[2]); // Output: Apple



// ⚙️ Function Example
// A function is a reusable block of code that performs a specific task.
function greet() {
  console.log("Hello");
}

// Calling (executing) the function
greet(); // Output: Hello
