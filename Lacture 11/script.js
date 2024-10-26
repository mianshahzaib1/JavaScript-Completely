console.log(document.querySelector(".box").tagName);
console.log(document.querySelector(".box").innertext = "Hey I am Good");

// console.log(document.querySelector(".container").textContent);


// console.log(document.querySelector(".container").innerHTML);

// console.log(document.querySelector(".container").outerHTML);

console.log(document.querySelector(".box").dataset)

// console.log(element.hidden = true)

console.log(document.querySelector(".box").hasAttribute("style"));

console.log(document.querySelector(".box").getAttribute("style"));

console.log(document.querySelector(".box").setAttribute("style","diplay:inline"));

console.log(document.querySelector(".box").attributes);

console.log(document.querySelector(".box").removeAttribute("style"))


// let div = document.createElement("div")
// div.innerHTML = "I have been inserted <b>by Shabi</b>"
// div.className = "SHAHZAIB"
// document.body.append(div)

let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterend","<b> I am under the Water please help me</b>")


let a  = document.querySelector(".box2") .remove(".box2")


console.log(document.querySelector(".container").className);

console.log(document.querySelector(".container").classList.add("shabi"))

console.log(document.querySelector(".container").classList.remove("shabi"))

console.log(document.querySelector(".container").classList.toggle("red"))