async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(99)
        }, 2000);
    })
}


function sum(a,b,c){
 return a + b + c
}

 ( async function main(){
//     let a = await sleep();
    //    console.log(a);
//     let b = await sleep()
    //    console.log(b)
    let [x,y,...rest] = [3,9,7,12,3,4,5];
    console.log(x,y,rest)
 })()          
 

// let arr = [1,2,4];
// console.log(arr[0] + arr[1] + arr[2]);
// console.log(sum(...arr))

const arr = [1,7,8];
const obj = {...arr}
