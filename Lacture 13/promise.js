let prom1 = new Promise((resolve, reject) => {
    let a  = Math.random();
    if (a <0.5){
        reject = ("No Random Number Was Not Supporting You")
    }
    else{
    setTimeout(() => {
        console.log("Yes I am Done")
        resolve("Shabi")
    }, 3000);
}
})

let prom2 = new Promise((resolve, reject) => {
    let a  = Math.random();
    if (a <0.5){
        reject= ("No Random Number Was Not Supporting You 2")
    }
    else{
    setTimeout(() => {
        console.log("Yes I am Done 2")
        resolve("Shabi 2")
    }, 3000);
}
})
let prom3 = new Promise((resolve, reject) => {
    let a  = Math.random();
    if (a <0.5){
        reject = ("No Random Number Was Not Supporting You 3")
    }
    else{
    setTimeout(() => {
        console.log("Yes I am Done 3")
        resolve("Shabi 3")
    }, 3000);
}
})

let p3 = Promise.race(prom1,prom2)
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
console.log(err)
})