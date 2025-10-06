// ===============================================
// 🔹 19. JavaScript For...in Loop
// ===============================================
//
// The `for...in` loop is used to iterate over all the
// enumerable properties (keys) of an object.
//
// ✅ Key Points:
// - Loops through keys of an object one by one.
// - Use bracket notation (obj[key]) to access the corresponding value.
// - Useful for objects, not ideal for arrays (use `for...of` for arrays).
// ===============================================



// -----------------------------------------------
// 🔹 Example: Looping Through Object Properties
// -----------------------------------------------

let student = {
  name: "Karimul",
  age: 27,
  gender: "Male"
};

// Iterate over each key in the object
for (let key in student) {
  // Access both the property name and its value
  console.log(key + " : " + student[key]);
}

// ✅ Output:
// name : Karimul
// age : 27
// gender : Male
