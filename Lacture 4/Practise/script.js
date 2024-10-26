// ---------1----------
// Write a program to print the marks of a student in an object using for loop
// marks = {Shahzaib:34,Ahmad:23,Aslam:15}

// let marks = {
//     Shahzaib:"34",
//     Ahmad : "23",
//     Aslam : "15"
// }


// for (let student in marks) {
    
//   console.log(student + "" + marks[student])  
// }
// -------2-------
// Write a program to print the marks of a sudent in an object using forin loop
//  marks = {Shahzaib:34,Ahmad:23,Aslam:15} 

// let marks = {
//     Shahzaib:"34",
//     Ahmad : "23",
//     Aslam : "15"
// }


// for (let student in marks) {
    
//    const element = marks[student];
//      console.log(student,marks[student]);  
//     }




// ----------3--------
// Write a program to print "Try Again" until the user enter the correct number
// let correctNumber1 = 10;
// let correctNumber2 = 20;

// while (true) {
// let number1 = parseInt(prompt("Enter First Number"));
// let number2 = parseInt(prompt("Enter Second Number"));

// if(number1 === correctNumber1 && number2 === correctNumber2){
//   console.log("Correct Number!")
//   break;
// }
// else{
//   console.log("Try Again")
// }
// }



// -------4--------
// Write a Function To Find Mean of 5 Numbers;


function calculateMeanWordLegnth(word1,word2,word3,word4,word5){
    let totalLegnth = word1.Legnth + word2.Legnth + word3.Legnth + word4.Legnth + word5.Legnth;
    return totalLegnth / 5;
}
word1 = "Apple";
word2 = "Banana";
word3 = "Cherry";
word4 = "Date";
word5 = "Elder Berry";

let meanLegnth = calculateMeanWordLegnth(word1,word2,word3,word4,word5)

console.log("MeanWordLegnth",meanLegnth);