//  reduce in Array
//  it take first and second element from the element {add } according to the return statement.
// it is use to flat an array means to convert 2D and 3D array into single Dimension array
// Hear, 1+4 = 5
// 5+8 = 13
// 13+10 = 23
// 23+7 =30

let num = [1,4,8,10,7];

let total = (num1,num2)=>{
    return num2 + num1;
    };

let new_Array =num.reduce(total)
console.log(new_Array);


//  Reduce Function


let sumIt = [10,20,30,40,50];

let sum=sumIt.reduce((accumulator,currentElement,currIndex,array)=>{
    return accumulator+=currentElement
});
console.log(sum);