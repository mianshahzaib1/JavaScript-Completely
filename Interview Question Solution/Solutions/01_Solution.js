// The Magical Sorting Hat: Imagine You are creating a magical sorting hat for a 
// Wizard School.Implement a JavaScript  function that takes an array of student names
// and assign them to one of the four houses (Gryffinder(legnth less than 6),Hufflepuff(legnth less than 8),
//Ravenclaw(lagnth less than 12),or Slerinyth(legnth greater than or eqauall to 12),
// based on the lengthof their names

let students = ["Shabi", "Aslam", "Javed", "Aqib", "Ahsan",
    "Shahzaib", "Mustansir", "AbdulGafoor", "Mian"]

let houses = [];


for (const student of students) {
    if (student.length < 6) {
        houses.push("Gryffinder")
    }
    else if (student.length < 8) {
        houses.push("Hufflepuff")
    }
    else if(student.length < 12){
        houses.push("Ravenclaw")
    }
    else{
        houses.push("Slerinyth")
    }
}

console.log("houses")