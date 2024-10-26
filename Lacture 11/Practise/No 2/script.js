// -------3--------
// Write a program to keep fetching contents of a website (Every 5 Seconds);

const intervalid = setInterval(async()=>{
    try{
        const response = await fetch('(https://www.youtube.com/)');

        const html = await response.text();

        console.log("Fetched Website Content:",html);
    }
    catch(error){
        console.error("Error Fetching website content",error)
    }
    
},5000)