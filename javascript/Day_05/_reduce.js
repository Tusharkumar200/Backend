// Chaining --> Means we can use more then one function at a time


let arr = [2,3,4,5,9,6,8];

let sum = ( num1 , num2)=> {return num1 +num2};

let ans = arr.map((currentItem)=>{
        return currentItem*2;       // Hear array become twice
        

}).filter((currentItem)=>{          // array filter
    let greaterElement = currentItem>10;
    return greaterElement;
}).reduce((accumulator,currentItem)=> accumulator+=currentItem,4); // add{we can performed any operation} the filtered array and hear 4 is a outer value which is also going to be added through reduce

console.log(arr);
console.log(ans);