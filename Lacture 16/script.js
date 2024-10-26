// let obj = {
//     a:1,
//     b:"Shabi"
// }

// console.log(obj)

// class animal{
//     eats = true;
// }
// class rabbits{
//     jumps = true;
// }

// rabbits.__proto__ = animal;

class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }

    eats(){
        console.log("Kha rha hoo")
    }
    jump(){
        console.log("Kood rha hoo")
    }
}
 class lion extends Animal{
constructor (name){
    super(name)
    console.log("Object is Created And he is lion")
}
 }

let a =new Animal("lion");
console.log(a)

let l = new lion("Shera");
console.log(l)