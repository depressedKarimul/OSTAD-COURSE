// Non Primitive Data types

// Call by vale and call by reference 

const person = {
  name: "John",
  age: 25,
  father: {
    name: "Sam",
    age: 50,
  },
};


// const person2 = person;

// shallow copy
// const person2 = { ...person };

// Deep copy
// object -> string -> object
const person2String = JSON.stringify(person);
const person2 = JSON.parse(person2String);

person2.name = "Jack";
person2.father.name = "Peter";

console.log(person);
console.log(person2);
// console.log(person2String);

console.log(person2.father === person.father);

// loose equality (==)
// console.log(4 == "4");

// strict equality (===)
// console.log(4 === "4");

// 39:42
