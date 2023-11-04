// crud operator on Array

let Name =['Tushar', 'Mohit','Sachin','Harsh'];

            //  ***To insert the Element in the array ***

// push --> 'End of the Array'
// it's return length of an array.
//  we can add one or more the one element 

//  Name.push('nirja'); 
// console.log(Name);

let newName = Name.push('suraj');
console.log(newName);



// unshift --> add the element in the starting
// it's return length of an array.
//  we can add one or more the one element 

//  Name.unshift('nirja'); 
 
//  let newName = Name.unshift('suraj');
//  console.log(newName);
//  console.log(Name);


//              ***To Removing the Element in the array ***

// // pop--> It' only remove the last element of the array

// let Name =['Tushar', 'Mohit','Sachin','Harsh'];

// Name.pop();

// console.log(Name);
// let NewName=Name.length;
// console.log(NewName);



// shift--> It'  remove from the first element of the array

//let Name =['Tushar', 'Mohit','Sachin','Harsh'];

Name.shift()

console.log(Name);
let NewName=Name.length;
console.log(NewName);

