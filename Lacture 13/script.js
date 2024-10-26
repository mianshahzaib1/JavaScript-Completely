console.log("Hey Shabi You are Good");
console.log("Hey Ahmad You are Good");

setTimeout(() => {
    console.log("Hey Print me inside")
}, 3000);

setTimeout(() => {
    console.log("Hey Print me again inside")
}, 5000);

console.log("Hello Word")

const callback =(arg)=>{
console.log(arg)
}

const loadScript = (src,callback)=>{
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Shabi");
    document.head.append(sc)
}

loadScript("https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.js",callback)