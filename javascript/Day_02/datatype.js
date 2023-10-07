var myname = " tushar kumar ";
console.log(typeof(myname));
var rollNo = " 20";
console.log(typeof(rollNo))

var num= 34;
console.log(num);
console.log(typeof(num));

// *** challenger of the day *** 
console.log("*** challenger of the day ***");

var add = 10 + "20";
console.log(add);

var sub= 9- "5";
console.log(sub); // BUG in js showing result 4

var name = "java" + "Script";
console.log(name);

var empty = " " + " ";
console.log(empty);

var zero = " "+ 0;
console.log(zero);

var myname = "Tushar" - "Kumar";
console.log(myname);

// true =1
// false =0

var bool_1 = true + true;
console.log(bool_1);

var bool_2 = true + false;
console.log(bool_2);

var bool_3 = false + true;
console.log(bool_3);

var bool_4= false - true;
console.log(bool_4);

// Diffrent between null and undifine
var i_am_useless = null;
console.log(i_am_useless);
console.log(typeof(i_am_useless));  // BUG in js null datatype is showing object

var your_name_is;
console.log(your_name_is);
console.log(typeof(your_name_is)); 

//  Not-A-Number

var myPhoneNumber =987654310;
console.log(isNaN(myPhoneNumber));
console.log(isNaN(myname));