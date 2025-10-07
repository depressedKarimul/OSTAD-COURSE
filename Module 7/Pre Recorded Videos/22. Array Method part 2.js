// 22. Array Method part 2

// ===================================================
// 🔹 22. JavaScript Array Utility Methods (Part 2)
// ===================================================
//
// Arrays in JavaScript have powerful built-in utility
// methods to manipulate, search, and transform data.
// Below are commonly used ones with examples and notes.
// ===================================================



// ---------------------------------------------------
// 🔸 1. Array.from()
// ---------------------------------------------------
//
// ➤ Converts any iterable (like a string or set) into an array.
// ➤ Each character or element becomes a separate array item.
// ---------------------------------------------------

const str = "Hello";
const fromResult = Array.from(str);

console.log(fromResult);   // ✅ Output: [ 'H', 'e', 'l', 'l', 'o' ]
console.log(fromResult[1]); // ✅ Output: e



// ---------------------------------------------------
// 🔸 2. Array.includes()
// ---------------------------------------------------
//
// ➤ Checks whether an array contains a specific value.
// ➤ Returns `true` if found, otherwise `false`.
// ---------------------------------------------------

const fruits = ['apple', 'mango', 'banana'];
const hasBanana = fruits.includes('banana');

console.log(hasBanana);  // ✅ Output: true



// ---------------------------------------------------
// 🔸 3. Array.join()
// ---------------------------------------------------
//
// ➤ Joins all elements of an array into a single string.
// ➤ You can specify a separator (default is a comma).
// ---------------------------------------------------

const words = ["I", "Love", "Bangladesh"];
const sentence = words.join(" ");

console.log(sentence);  
// ✅ Output: I Love Bangladesh



// ---------------------------------------------------
// 🔸 4. Array.lastIndexOf()
// ---------------------------------------------------
//
// ➤ Returns the **last index** at which a given element
//   can be found in the array.
// ➤ Returns -1 if the element is not found.
// ---------------------------------------------------

const numbers = [1, 9, 3, 43, 4, 2];
const index = numbers.lastIndexOf(43);

console.log(index);  // ✅ Output: 3



// ---------------------------------------------------
// 🔸 5. Array.length
// ---------------------------------------------------
//
// ➤ Returns the number of elements in an array.
// ➤ Often used in loops and array size validation.
// ---------------------------------------------------

const names = ["Hassan", "Shuvo", "Khan"];
console.log(names.length);  // ✅ Output: 3



// ---------------------------------------------------
// 🔸 6. Array.pop()
// ---------------------------------------------------
//
// ➤ Removes the **last element** from an array.
// ➤ Returns the removed element.
// ➤ Modifies the original array.
// ---------------------------------------------------

const animals = ["cat", "dog", "rabbit"];
const removedAnimal = animals.pop();

console.log(removedAnimal); // ✅ Output: rabbit
console.log(animals);       // ✅ Output: [ 'cat', 'dog' ]
