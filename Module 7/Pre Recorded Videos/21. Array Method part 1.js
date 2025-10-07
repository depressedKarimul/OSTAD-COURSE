// ===================================================
// 🔹 21. JavaScript Array Methods
// ===================================================
//
// Arrays in JavaScript come with many built-in methods
// that help perform common operations like searching,
// filtering, combining, and testing array elements.
//
// Below are some of the most useful ones explained
// with examples for easy understanding.
// ===================================================



// ---------------------------------------------------
// 🔸 1. Array at() Method
// ---------------------------------------------------
//
// ➤ The at() method returns the element at a specified index.
// ➤ It also supports negative indexing (from the end).
// ---------------------------------------------------

const numbers = [10, 20, 30, 40, 50];

console.log(numbers.at(2));   // ✅ Output: 30
console.log(numbers.at(-1));  // ✅ Output: 50 (last element)



// ---------------------------------------------------
// 🔸 2. Array concat() Method
// ---------------------------------------------------
//
// ➤ The concat() method is used to merge two or more arrays.
// ➤ It does not modify the original arrays.
// ---------------------------------------------------

const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'tomato'];

const resultConcat = fruits.concat(vegetables);
console.log(resultConcat);  
// ✅ Output: [ 'apple', 'banana', 'carrot', 'tomato' ]

for (let item of resultConcat) {
  console.log(item);
}
// ✅ Output:
// apple
// banana
// carrot
// tomato



// ---------------------------------------------------
// 🔸 3. Array every() Method
// ---------------------------------------------------
//
// ➤ The every() method tests whether **all elements**
//   in an array pass a given condition.
// ➤ Returns `true` if all pass, otherwise `false`.
// ---------------------------------------------------

const nums = [10, 20, 30, 40, 50];

const allPositive = nums.every(num => num > 0);
console.log(allPositive);  
// ✅ Output: true



// ---------------------------------------------------
// 🔸 4. Array filter() Method
// ---------------------------------------------------
//
// ➤ The filter() method creates a new array
//   with all elements that pass a given condition.
// ➤ Commonly used for selecting specific data.
// ---------------------------------------------------

const mixedNumbers = [1, 3, 2, 4, 5, 6];

// Filter out only even numbers
const evenNumbers = mixedNumbers.filter(num => num % 2 === 0);

console.log(evenNumbers);  
// ✅ Output: [ 2, 4, 6 ]



// ---------------------------------------------------
// 🔸 5. Array find() and findIndex() Methods
// ---------------------------------------------------
//
// ➤ find() → Returns the **first element** that satisfies a condition.
// ➤ findIndex() → Returns the **index** of that first matching element.
// ---------------------------------------------------

const values = [120, 5, 12, 8, 130, 44];

const foundValue = values.find(num => num > 10);
const foundIndex = values.findIndex(num => num > 5);

console.log(foundValue);  // ✅ Output: 120
console.log(foundIndex);  // ✅ Output: 0
