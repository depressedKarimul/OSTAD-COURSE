// ===================================================
// 🔹 24. JavaScript String Methods (Part 1)
// ===================================================
//
// Strings in JavaScript are sequences of characters and
// come with many built-in methods for searching,
// modifying, and inspecting text.
//
// Below are commonly used string methods explained
// with examples and outputs.
// ===================================================



// ---------------------------------------------------
// 🔸 1. charAt()
// ---------------------------------------------------
//
// ➤ Returns the character at a specified index in a string.
// ➤ Indexing starts from 0.
// ---------------------------------------------------

let name = "Bangladesh";
console.log(name.charAt(5));  
// ✅ Output: 'l'



// ---------------------------------------------------
// 🔸 2. concat()
// ---------------------------------------------------
//
// ➤ Joins two or more strings together.
// ➤ Works like the + operator for strings.
// ---------------------------------------------------

let firstName = "Rahim";
let lastName = "Uddin";
let fullName = firstName.concat(" ", lastName);

console.log(fullName);  
// ✅ Output: 'Rahim Uddin'



// ---------------------------------------------------
// 🔸 3. includes()
// ---------------------------------------------------
//
// ➤ Checks if a string contains a specific substring.
// ➤ Returns true or false.
// ---------------------------------------------------

let text = "I love programming in JavaScript";
console.log(text.includes("JavaScript"));  
// ✅ Output: true



// ---------------------------------------------------
// 🔸 4. indexOf()
// ---------------------------------------------------
//
// ➤ Returns the index of the first occurrence of a substring.
// ➤ Returns -1 if not found.
// ---------------------------------------------------

let sentence = "I am learning JavaScript";
console.log(sentence.indexOf("JavaScript"));  
// ✅ Output: 14



// ---------------------------------------------------
// 🔸 5. lastIndexOf()
// ---------------------------------------------------
//
// ➤ Returns the index of the last occurrence of a substring.
// ➤ Useful when the same word appears multiple times.
// ---------------------------------------------------

let data = "JavaScript is fun. I love JavaScript!";
console.log(data.lastIndexOf("JavaScript"));  
// ✅ Output: 26



// ---------------------------------------------------
// 🔸 6. startsWith() and endsWith()
// ---------------------------------------------------
//
// ➤ startsWith(): Checks if a string begins with specific text.
// ➤ endsWith():   Checks if a string ends with specific text.
// ---------------------------------------------------

let msg = "Hello Bangladesh";

console.log(msg.startsWith("Hello"));       // ✅ Output: true
console.log(msg.endsWith("Bangladesh"));    // ✅ Output: true



// ---------------------------------------------------
// 🔸 7. match()
// ---------------------------------------------------
//
// ➤ Searches a string for a pattern (regular expression).
// ➤ Returns an array with matched text or null if not found.
// ---------------------------------------------------

let txt = "My email is hello@example.com";
let result = txt.match(/\w+@\w+\.\w+/);

console.log(result);  
// ✅ Output: [ 'hello@example.com', index: 12, input: 'My email is hello@example.com' ]



// ---------------------------------------------------
// 🔸 8. replace()
// ---------------------------------------------------
//
// ➤ Replaces a specified value with another string.
// ➤ By default, replaces only the first occurrence.
// ---------------------------------------------------

let text1 = "I like Python";
let newText = text1.replace("Python", "JavaScript");

console.log(newText);  
// ✅ Output: 'I like JavaScript'
