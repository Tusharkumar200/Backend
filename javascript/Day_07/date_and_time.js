// *** In JavaScript 0 -> jan and 11 -> Dec

//  new Date() --> Date object is created by new Date() constructor
// To Display the current date and time in the browser
//  2023-10-07T05:43:45.929Z

// new Date(year, month,day,hour,min,second,millisecond)
// let currentDate = new Date();
// console.log(currentDate);


//  Displaying same date and time as like browser in editor we have
//  Sat Oct 07 2023 11:16:31 GMT+0530 (India Standard Time)
// new Date(year, month,day,hour,min,second,millisecond) Date(2023,9,7,22,10,33)
//  To pass the year and month is compulsory

let browser_date = new Date(2023,9,7,22,10,33).toString();
// console.log(browser_date);

//  Display the current date and time in the editor
// 7/10/2023, 11:13:45 am

let new_Date = new Date().toLocaleString();  
// console.log(new_Date);

// To view the millisecond since 1 jan 1970 to current_time
// 1696657789023

// console.log(Date.now());


//  *** To Get individual Date  ***

let curr_Date = new Date();

console.log(curr_Date.toLocaleString());
console.log(curr_Date.getFullYear());
console.log(curr_Date.getMonth());
console.log(curr_Date.getDate());


//  set Date  display correct local time in the browser 

// set  .set{fullyear}(year)
console.log(curr_Date.setFullYear(2023));
console.log(curr_Date.setMonth(10));
console.log(curr_Date.setDate(7));



//  *** To Get individual Time   ***

console.log("****Time zone****");
console.log(curr_Date.getHours());
console.log(curr_Date.getMinutes());
console.log(curr_Date.getSeconds());
console.log(curr_Date.getMilliseconds());

// set Time
//  set time display correct local time in the browser 

let curr_Time = new Date();
console.log(curr_Time.setHours(13));
console.log(curr_Time.setMinutes(4));
console.log(curr_Time.setSeconds(5));
console.log(curr_Time.setMilliseconds(1));

//  **** To display only current Date and Time ****

let only_Date = curr_Date.toLocaleTimeString();
console.log(only_Date);

let only_Time = curr_Time.toLocaleTimeString();
console.log(only_Time);
