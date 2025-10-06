// ===============================================
// 🧠 08. If-Else Statement in JavaScript
// ===============================================
//
// The if-else statement is used to make decisions in code.
// It executes a block of code if a specified condition is true,
// and optionally another block if the condition is false.
// ===============================================


// -----------------------------------------------
// 🔹 Example 1: Simple If-Else Condition
// -----------------------------------------------

let age = 18;

// Check if the person is an adult or a minor
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}



// -----------------------------------------------
// 🔹 Example 2: Grading System using If-Else If Ladder
// -----------------------------------------------
//
// The 'else if' structure allows checking multiple conditions
// one by one until a true condition is found.

let mark = 75;

// Evaluate grade based on marks
if (mark >= 80) {
  console.log("A+");
} else if (mark >= 70) {
  console.log("A");
} else if (mark >= 60) {
  console.log("A-");
} else if (mark >= 50) {
  console.log("B");
} else if (mark >= 40) {
  console.log("C");
} else if (mark >= 33) {
  console.log("D");
} else {
  console.log("F");
}

// ✅ Output for mark = 75 → "A"
