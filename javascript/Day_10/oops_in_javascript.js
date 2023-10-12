//  Object in javaScript

// 1st way of creating object
// let myBioData = {
//      myName: "Tushar kumar",
//      age: 18,
//     getData: function(){
//         console.log(`my name is ${myBioData.myName} and my age is ${myBioData.age}`);
//     }

// };

// console.log(myBioData.myName);
// console.log(myBioData.age);
// console.log(myBioData.getData());


// 2nd way of creating object 

// let myBioData = {
//      myName: "Tushar kumar",
//      age: 18,
//     getData(){
//         console.log(`my name is ${myBioData.myName} and my age is ${myBioData.age}`);
//     }

// };

// console.log(myBioData.myName);
// console.log(myBioData.age);
// console.log(myBioData.getData());

// What if we want object as a value inside an object

let myBioData = {
     myName: "Tushar kumar",
     age: 18,
     myObj:{
        notice: " This is a notice from the object inside object"
     },

    getData(){
        console.log(`my name is ${myBioData.myName} and my age is ${myBioData.age}`);
    }

};

console.log(myBioData.myName);
console.log(myBioData.age);
console.log(myBioData.getData());
console.log(myBioData.myObj.notice);