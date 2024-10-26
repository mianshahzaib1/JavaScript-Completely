function nice(name) {
console.log("Hey" + name +"You are good");
console.log("Hey" + name +"You are nice");
console.log("Hey" + name +"Your tshirt is good");
console.log("Hey" + name +"Your course is good too");
}
nice("Shahzaib");
nice("Javed");

function sum(a,b,c =10) {
    console.log(a+b)
    return a + b +c
}

result1 = sum(3,4);
result2 = sum(4,2);
result3 = sum(1,2,4)
console.log("The sum of these number is",result1);
console.log("The sum of these number is",result2);
console.log("The sum of these number is",result3);

const fun1 = (x)=>{
    console.log("Hey I am an arrow function",x)
}
fun1=(43);
fun1=(12);
fun1=(13);
