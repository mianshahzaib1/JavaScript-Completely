// --------1-------
// Create  an array of numbers and take input from the user to add numbers to this array

// let numbers =  [1,2,3,4];

// let input = prompt("Enter a number to add");
// input = parseInt(input);
// numbers.push(input);

// console.log(numbers);

// ---------2-------
// keep adding number to the array in 1 until 0 is added to this array

// let numbers = [];
// while (true) {
//     let input = prompt("Enter a number to add or(add 0 to stop):");

// let num = parseInt(input)
// if(num === 0) break;
// numbers.push(num)
// alert(numbers)
// }



// --------------3-----------
// Filter for numbers divisible by 10 from a given array

// function divisibleby10(arr){
//     return arr.filter(num => num % 10 ===0);
// }
// let numbers = [10,15,20,30,47,59,90];
// let filterNumber = divisibleby10(numbers);
// console.log(filterNumber)




// -----------4--------
// Create an array of square of given numbers

// let arr =[2,3,4,5,6];

// let newArr = arr.map((e)=>{
//     return e ** 2
// })
// console.log(newArr)




// ------5------
// Use reduce to calculate factorial of a given numbers from an array of first n natural numbers(n being the number whose factorial need to be calculated)


let arr = [2,3,4,57,8];

const red = (a,b) =>{
    return a * b
} 
console.log(arr.reduce(red));