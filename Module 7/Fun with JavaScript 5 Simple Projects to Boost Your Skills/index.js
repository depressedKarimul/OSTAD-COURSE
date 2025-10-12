// Add Two NUmbers

function add(x, y) {
  let result = x + y;

  return result;
}

let Allresult = add(100, 200) + add(600, 500) + add(50, 80);

console.log(Allresult);

// Even or ODD Checker

function isEven(num) {
  // if (num % 2 === 0) {
  //   return "Even";
  // } else {
  //   return "Odd";
  // }
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(isEven(3));

//  Convert Celsius To Farhenheit

function CelsiusToFarhenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(CelsiusToFarhenheit(2));

// Square of a Number

function squareNumber(num) {
  return num * num;
}

console.log(squareNumber(5));

// Get First Character of a String

function firstCharacter(str) {
  return str.charAt(0);
}

console.log(firstCharacter("Hello"));

// Number is Positive or Negative

function checkNum(num) {
  // if(num>0) {
  //   return "Positive";
  // }else {
  //   return "Negative";
  // }
  return num >= 0 ? "Positive" : "Negative";
  // switch(num) {
  //   case num%2 >= 0:
  //   return "Positive";
  //   case num%2 <= 0 :
  //     return "Negative";
  // }
}

console.log(checkNum(4));

// Multiply two numbers

function multiply(x, y) {
  if (typeof x !== "number") {
    return "1st Number is not a number";
  } else if (typeof y !== "number") {
    return "2st Number is not a number";
  } else {
    return x * y;
  }
}
console.log(multiply("M",29));

// Convert Minutes to Second
function MinutesToSecond(minutes){
return minutes*60;
}

console.log(MinutesToSecond(60));



// Concatenation two string

function concatenation(x,y) {
  return x+" "+y;
}

console.log(concatenation("Hello","Js"));


// Check if string contain a word

function checkSTR(sentence, word) {
  return sentence.includes(word);
}

console.log(checkSTR("I love javaScript","javaScript"));
