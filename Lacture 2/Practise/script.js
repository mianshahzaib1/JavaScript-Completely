// ------1-----
// Create a Variable of type string and try to add a number to it
var a = "Shahzaib";
a = a + 100;


console.log(a);
// console.log(a + 100);  Or Do This


// -----2-----
// Use Typeof operators to find the datatype of the string in last question

let v = "Shahzaib";
console.log(typeof v);


// --------3------
// Create a Const object in JavaScript.Can You Change it to hod a number later

let cost = {
    amount:"twenty dollars",
    name : "Shahzaib Safdar"
}
console.log(cost)
cost.amount = 20;
console.log(cost)

// In JavaScript,Object Properties Can be dynamically Changed and their data types can be changed as well




// -------4-----
// Try to add a new key in const object in problem 3 were you able to do it;

// Yes i able to add a new key to const object

let obj = {
    "name":"Shahzaib"
}
obj.class = "10"
obj.RollNumber = "12"

console.log(obj)



// ---------5-----
// Write a JS Program to Create a Dictionary of 5 Words

let Dictionary = {
    "Apple": "A Sweet,Juicy,red fruit",
    "Dog" : "A domesticated carnivorous mammal",
    "House" :"A Building for human habitation",
    "Car" : "A road vehicle powered by an internal combustion engine",
    "Tree": "A Perennial plant with a single stem or trunk"
}
console.log(Dictionary)