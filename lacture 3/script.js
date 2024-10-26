console.log("Hey This is Conditional Tutorial");

let age = 1;
// let grace = 2;

// age += grace
// console.log(age);

// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age % grace);
// console.log(age ** grace);



if(age==30){
    console.log("You can drive");
}
else if(age==0){
    console.log("Are you kidding")
}
else if(age==1){
    console.log("Are you again kidding")
}
else{
    console.log("You cannot drive");
}



a = 6;
b = 8;

let c = a>b ? (a-b):(b-a)
/*
Translate to
a = 6;
b = 8;
if(a>b){
    let c =a-b;
}
else{
    let c =b-a;
}
*/