// function myMessage1() {
//   alert("I am Button 1");
// }

// function myMessage2() {
//   alert("I am Button 1");
// }


function submitFunction() {
  let sub  = document.getElementById("submitTextId");
  sub.style.color = "green";
  sub.innerHTML ="Successful!"

}

function imgFunction() {
  let img = document.querySelector("#swImg");

  img.src = "sw.jpg";
}