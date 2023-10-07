// splice();
//  Add or Remove the element from the array

const months = ['jan','march','june','July'];

// Add Dec at the End
months.splice(months.length,0,"Dec")
console.log(months);

//  what is the return value of splice() method
//  sol2. it's return the deleted element
const newMonth = months.splice(months.length,0,"Dec");
console.log(newMonth);

// update march to March
// months.splice(1,1,"March");
// console.log(months);

let indexofMonth = months.indexOf('march')
let updateMonth = months.splice(indexofMonth,1,"March");
console.log(updateMonth); //months update