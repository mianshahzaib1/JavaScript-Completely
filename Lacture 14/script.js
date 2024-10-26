// async function getData(){
// Simulate getting Data From a server
//   return new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(455);
//     }, 5000);
//   })
// }

async function getData(){
    let  x = await fetch("https://jsonplaceholder.typicode.com")
    let data = await x.json()
    console.log("data")
}

async function main(){
console.log("Loading Modules");

console.log("Do SomeThing Else")

console.log("Load Data");
 let data =  await getData();

 console.log("data")

console.log("Done Task");

console.log("Hello Word")

}

main()
// data.then((v)=>{

// console.log("data")

// console.log("Process Data");
// console.log("Done Task");

// })
