// ===============================================
// 🔹 20. JavaScript For...of Loop
// ===============================================
//
// The `for...of` loop is used to iterate over **iterable objects**
// like arrays, strings, maps, sets, etc.
//
// ✅ Key Points:
// - Loops through the **values** of the iterable directly.
// - Easier and cleaner than using traditional `for` loops for arrays.
// - Use `continue` or `break` to control loop flow as needed.
// ===============================================



// -----------------------------------------------
// 🔹 Example 1: Looping Through Array of Strings
// -----------------------------------------------

let names = ["Shuvo", "Shupto", "Shusmo"];

// Iterate over each element (value) in the array
for (const name of names) {
  console.log(name);
}

// ✅ Output:
// Shuvo
// Shupto
// Shusmo



// -----------------------------------------------
// 🔹 Example 2: Looping Through Array of Numbers with Condition
// -----------------------------------------------

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Print only odd numbers using continue
for (let number of numbers) {
  if (number % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(number);
}

// ✅ Output:
// 1
// 3
// 5
// 7
// 9
