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
return num%2 === 0 ? "Even" : "Odd";

}

console.log(isEven(3));


//  Convert Celsius To Farhenheit

function  CelsiusToFarhenheit(celsius){
  return (celsius*9/5)+32
}
console.log(CelsiusToFarhenheit(2));

