let link = document.getElementsByTagName("a")[0];

console.log(link);

link.innerHTML = "depressedKarimul";
link.style.color = "black";
link.style.textDecoration = "none"
link.style.fontSize = "20px";
link.href = "https://depressedkarimul.github.io/Links/";



let heading1 = document.createElement("h3");
let text = document.createTextNode("Hello Dhaka");

 heading1.appendChild(text);

let myDiv = document.getElementById("my-div");

myDiv.appendChild( heading1);


let heading2 = document.getElementsByClassName("remove-class")[0];
console.log(heading2);

myDiv.removeChild(heading2);



let createNewElement = document.createElement("h1");
let text2 = document.createTextNode("Heyyyyy");

// ;

createNewElement.appendChild(text2);

myDiv.insertBefore(createNewElement,heading1)



