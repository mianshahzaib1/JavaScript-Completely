// -------1------
// What will print the following in JavaScript;
// console.log("har/" ".length)
// Ans:

// "har"(3 characters);
// "/" (1 character);
//  "" (1 charater);
// The total length of the string is 3 + 1 + 1 = 5
//  Backslash (/) is an escapes character in javascript and it escapes the ("") double quotes as follows it.
// This mean the DoubleQuotes("") is treated as a literal character not as the end of string.
// so the total length of the string is 5
// characters "har" ". 

// Therfore
console.log("har\" ".length);
// This print 5



// --------------2----------
// Explore the includes starts with & ends With function of a string

// Includes
const str = "Hello Word";
console.log(str.includes("Hello")); //true
console.log(str.includes("wow")); //false

// Starts with
const STR = "Hello Word";
console.log(STR.startsWith("Hello"))  // true
console.log(STR.startsWith("Word")) //false

// Ends With
const Str = "Hello Shahzaib"
console.log(Str.endsWith("Shahzaib")); //true
console.log(Str.endsWith("Hello"));

// ------3-------
// Write a program to convert  a given string to lowerCase
let naam = "Jamshed";
console.log(naam.toLowerCase())


// -----------4---------
// Try to change 4th character of a given string were you able to do it
// Ans:
// Yes I can Change fourth Character of a string
let originalString = "Shahzaib";
let modifiedString = originalString
.replace("z","s")
.concat("one")
console.log(modifiedString)



// --------5------
// Extract the amount out of this string
// "Please give Rs 1000"

let srt = "Please give Rs 1000"
let amount = (srt.replace("Please give Rs","").trim());
console.log(amount);