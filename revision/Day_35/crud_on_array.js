const arr=[1,5,7,9,4,6];

const item_add = arr.push(10);
// console.log(item_add);

let studentName = ['tushar','harsh','niraj','sachin'];
let newAdmission = 'mohit';

//  studentName.push(newAdmission);
//  studentName.pop(newAdmission);
// console.log(studentName);

// for( let i in studentName){
//     console.log(i);
// }

// for( let i of studentName){
//     console.log(i);
// }

studentName.map((currentStudent)=>{
    console.log(currentStudent);
})
