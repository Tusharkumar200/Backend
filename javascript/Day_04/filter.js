// filter function in Array

let myArray = [50,70,90,40,51,0,5,9,7,6,48,3,11];

let newArray = myArray.filter((itemFilter)=>{
    let lessThen = itemFilter<50;
    let greaterThen = itemFilter>50;
    return greaterThen;
    return lessThen;

});
console.log(newArray);