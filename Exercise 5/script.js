const additem = async(item)=>{
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
    }
const randomDelay = ()=>{
    return new Promise((resolve,reject)=>{
        timeout = 1 + 6* Math.random()
        setTimeout(() => {
          resolve()
        }, 1000);
    })
}



async function main(){

setInterval(() => {
    let last = document.body.lastElementChild
    if(last.innerHTML.endsWith("...")){   
        last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length - 1)
    }
    else{
    last.innerHTML = last.innerHTML + "."
    }
    
}, 100);
     
let text = [
    "Initializing Hacking",
    "Reading Your Files",
    "Password Files Detected",
    "Sending all Passwords and personal files to Server",
    "Cleaning Up"
]
   
       
for (const item of text) {
    await additem(item)
    }
  
}
main()
