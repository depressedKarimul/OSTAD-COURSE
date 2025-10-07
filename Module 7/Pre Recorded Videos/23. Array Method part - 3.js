// ===================================================
// 🔹 23. JavaScript Array Manipulation Methods (Part 3)
// ===================================================
//
// Arrays in JavaScript can be modified, rearranged, or
// converted using several built-in methods.
// Below are key array manipulation techniques explained
// with examples and outputs.
// ===================================================



// ---------------------------------------------------
// 🔸 1. push()
// ---------------------------------------------------
//
// ➤ Adds one or more elements to the **end** of an array.
// ➤ Returns the new array length.
// ➤ Modifies the original array.
// ---------------------------------------------------

let fruits = ["apple", "banana"];
fruits.push("mango");

console.log(fruits);  
// ✅ Output: [ 'apple', 'banana', 'mango' ]



// ---------------------------------------------------
// 🔸 2. reverse()
// ---------------------------------------------------
//
// ➤ Reverses the order of elements in the array.
// ➤ Changes the original array.
// ---------------------------------------------------

let numbers = [1, 2, 3];
numbers.reverse();

console.log(numbers);  
// ✅ Output: [ 3, 2, 1 ]



// ---------------------------------------------------
// 🔸 3. shift()
// ---------------------------------------------------
//
// ➤ Removes the **first element** from an array.
// ➤ Returns the removed element.
// ➤ Modifies the original array.
// ---------------------------------------------------

let colors = ["red", "green", "blue"];
let removedColor = colors.shift();

console.log(removedColor);  // ✅ Output: red
console.log(colors);        // ✅ Output: [ 'green', 'blue' ]



// ---------------------------------------------------
// 🔸 4. slice()
// ---------------------------------------------------
//
// ➤ Returns a shallow copy of a portion of an array
//   without changing the original array.
// ➤ slice(start, end) → extracts from 'start' to before 'end'.
// ---------------------------------------------------

let names = ["Rakib", "Skaib", "Naim", "Haisb"];
let someName = names.slice(1, 3);

console.log(someName);  // ✅ Output: [ 'Skaib', 'Naim' ]
console.log(names);      // ✅ Output: [ 'Rakib', 'Skaib', 'Naim', 'Haisb' ]



// ---------------------------------------------------
// 🔸 5. some()
// ---------------------------------------------------
//
// ➤ Checks if **at least one** element passes a test.
// ➤ Returns true or false.
// ---------------------------------------------------

let nums = [5, 10, 15];
let hasLargeNumbers = nums.some(num => num > 15);

console.log(hasLargeNumbers);  // ✅ Output: false



// ---------------------------------------------------
// 🔸 6. sort()
// ---------------------------------------------------
//
// ➤ Sorts array elements alphabetically or by numeric order.
// ➤ Changes the original array.
// ➤ For numbers, a compare function is needed (a - b).
// ---------------------------------------------------

// Alphabetical sort
let fruitsList = ["cherry", "apple", "banana"];
fruitsList.sort();
console.log(fruitsList);  // ✅ Output: [ 'apple', 'banana', 'cherry' ]

// Numeric sort
let numList = [20, 5, 100];
numList.sort((a, b) => a - b);
console.log(numList);  // ✅ Output: [ 5, 20, 100 ]



// ---------------------------------------------------
// 🔸 7. splice()
// ---------------------------------------------------
//
// ➤ Adds or removes elements from an array.
// ➤ Modifies the original array.
// ➤ splice(startIndex, deleteCount, newItem)
// ---------------------------------------------------

let students = ["Arif", "Shuvo", "Nishat"];
students.splice(1, 1, "Rahim"); // remove 1 element at index 1 and insert 'Rahim'
console.log(students);  
// ✅ Output: [ 'Arif', 'Rahim', 'Nishat' ]



// ---------------------------------------------------
// 🔸 8. toString()
// ---------------------------------------------------
//
// ➤ Converts an array into a comma-separated string.
// ➤ Does not change the original array.
// ---------------------------------------------------

let letters = ["A", "B", "C"];
let stringResult = letters.toString();

console.log(letters);       // ✅ Output: [ 'A', 'B', 'C' ]
console.log(stringResult);  // ✅ Output: A,B,C



// ---------------------------------------------------
// 🔸 9. unshift()
// ---------------------------------------------------
//
// ➤ Adds one or more elements to the **beginning** of an array.
// ➤ Returns the new length.
// ➤ Modifies the original array.
// ---------------------------------------------------

let players = ["Shakib", "Tamim"];
players.unshift("Shuvoo");

console.log(players);  
// ✅ Output: [ 'Shuvoo', 'Shakib', 'Tamim' ]


