let boxes = document.getElementsByClassName('box');

console.log(boxes);

boxes[3].style.backgroundColor = "red"

document.getElementById("box1").style.backgroundColor = "yellow";


console.log(document.getElementsByTagName("div"));

document.querySelector(".box").style.backgroundColor = "green";

document.querySelectorAll(".box").forEach(e => {
     e.style.backgroundColor = "aqua"
});

