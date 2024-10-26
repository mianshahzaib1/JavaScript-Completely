function faultyCalaculator(num1,operator,num2){

    const faultChance = Math.random()<0.1;// 10% Chance of fault
  
    if(faultChance){
        //Perform Wrong Calculation

        switch(operator){
            case'+':
            return num1 - num2; //Subtract instead of add 
            case '-':
            return num1 + num2; //add instead of subtract
            case'*':
            return num1 / num2; //Divide instead of Multiply
            case'/':
            return num1 * num2; //Multiply instead of divide
            default:
                throw new Error('Invalid operator');
        }
    }
       
        else{
            //Perform the Correct Calculation
            switch(operator){
                case'+':
                return num1 + num2;
                case'-':
                return num1 - num2;
                case'*':
                return num1 * num2;
                case'/':
                return num1 / num2;
                default:
                    throw new Error('Invalid operator');
                  
        }
    
    }
   

}
// console.log(faultyCalaculator(10,'+',5));
// console.log(faultyCalaculator(10,'+',5));
// console.log(faultyCalaculator(10,'+',5));
// console.log(faultyCalaculator(10,'+',5));
// console.log(faultyCalaculator(10,'+',5));
// console.log(faultyCalaculator(10,'+',5));
// console.log(faultyCalaculator(10,'+',5));


// console.log(faultyCalaculator(10,'*',5));
// console.log(faultyCalaculator(10,'*',5));
// console.log(faultyCalaculator(10,'*',5));
// console.log(faultyCalaculator(10,'*',5));
// console.log(faultyCalaculator(10,'*',5));
// console.log(faultyCalaculator(10,'*',5));
// console.log(faultyCalaculator(10,'*',5));

// console.log(faultyCalaculator(100,'-',90));
// console.log(faultyCalaculator(100,'-',90));
// console.log(faultyCalaculator(100,'-',90));
// console.log(faultyCalaculator(100,'-',90));
// console.log(faultyCalaculator(100,'-',90));
// console.log(faultyCalaculator(100,'-',90));
// console.log(faultyCalaculator(100,'-',90))



// It Perform 10% of times wrong Calculation and 90% of the time perform correct calculation