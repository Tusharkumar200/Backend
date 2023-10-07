// we can create array using []

// let myArray =['Tushar', 'Ankit','Sachin','Mohit','Harsh'];

 //         *To access the element from the Array*
// let position = 3;
// console.log(myArray[position]);

//           *To access the last element from the Array*
// let lastElement = myArray[myArray.length-1];
// console.log(lastElement);

// //          *To Know the total length of an array*
// let totallength = myArray.length;
// console.log(totallength);


//          * To access the data from the for loop*
// let myArray =['Tushar', 'Ankit','Sachin','Mohit','Harsh'];
// normal method
// for(let value=0; value<myArray.length; value++){
//     console.log(myArray[value]);
// }

//          * To access The Index Number Of The Array*
//          from the for-in loop --> It's give index number

// for(var i in myArray){
//     console.log(i);
// }

//          * To access the data by the help of for-of loop*
//                   it's give value of array

// for(var i of myArray){
//     console.log(i);
// }



// To access the element, indexNumber and the whole array element
let myArray =['Tushar', 'Ankit','Sachin','Mohit','Harsh'];

// myArray.forEach(function(element,index,Array){
//     console.log(element,index,Array); // we can't use break in forEach loop
 
// })

//  using fat arrow function
//  in fat arrow function we cant't use this keyword

myArray.forEach((element,index,array)=>{
    console.log(`"element ${element} "index :" ${index} "array ${array}`)
});