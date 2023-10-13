// calculator using function

let add = (a,b) =>{   // CallBack function
    return a+b;
};

let subs =(a,b)=>{      // CallBack function
    
    return Math.abs(a-b);
};

let multi =(a,b) =>{    // CallBack function
    return a*b;
};

const calculator =(num1,num2,operators)=>{
    return operators(num1,num2);
}

const result = calculator(10,5,subs) // Higher Order Function
console.log(result);

