// --------1-------
// Use logical operators to find weather the age of a person lies between 10 an 20

// let age = prompt("Enter Your age");
// if(age>=10 && age<=20){
//     alert("Your age lies between 10 and 20");
// }
// else{
//     alert("Your age does not lies between 10 and 20");
// }


// --------2------
// Demonstrate the use of switch case statements in JavaScript
let color = "red";
switch(color){
case"red":
console.log("The Color is red");
break;
case"blue":
console.log("The Color is blue")
break;
case"green":
console.log("The Color is green")
break;
case"default":
console.log("Unknown Color")
}


// -------3------
// Write a JavaScript Program to find weather a number is divisble by 2 and 3;
// let num = prompt("Enter a number");
// if(num % 2 ===0 && num % 3===0){
//     console.log("The ${num} is divisible by both 2 and 3")
// }
// else{
//     console.log("The ${num} is  not divisible by both 2 and 3 ")
// }


// -----4-----
// Write a JavaScript Program to find weather a number is divisible by either 2 or three;


let num = prompt("Enter a Number");
if(num % 2 === 0 || num % 3=== 0){
    console.log("The ${num} is divisible by either 2 or 3")
}
else{
    console.log("The ${num} is not divisible by either 2 or 3")
}


// ------5-----

let age = prompt("Enter Your age");
let result = age>18 ? "You can Drive":"You Cannot Drive"

console.log(result)
