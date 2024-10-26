let ran = Math.random()
let first,second,third

// lets generate the first
if(ran>0.33){
    first= "Crazy"
}

else if(ran<0.66 && ran>=0.33){
 first = "Amazing"
}
else{
    first ="Fire" 
}

// lets generate the second
ran = Math.random()
if(ran>0.33){
    second= "Engine"
}

else if(ran<0.66 && ran>=0.33){
 second = "Foods"
}
else{
    second ="Garments" 
}

// lets generate the third
ran = Math.random()
if(ran>0.33){
    third= "bros"
}

else if(ran<0.66 && ran>=0.33){
 third = "Limited"
}
else{
    third ="Hub" 
}

console.log(`${first} ${second} ${third}`)

