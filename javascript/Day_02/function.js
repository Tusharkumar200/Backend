// To declare a function we use function keyword in js 

function sum(){
    var a=10, b=20;
    var total = a+b;
    console.log(total);
}

sum();

//function with parameter

function sub(a,b){
    return a-b;
}

total=sub(20,10);
console.log(total);

// anonymous function -> function without name

var funExp = function(a,b){
    return a+b;
}

console.log(funExp(50,50));