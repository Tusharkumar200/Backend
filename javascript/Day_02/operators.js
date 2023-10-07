var x= 5;
var y= 5;

console.log(x==y); // True
console.log("is this number is equal" + x==y); // False
console.log (`is this number is equal:${x==y}`); //True
 
//  increment and decrement operator

/*

// postFix 
// first evaluate the operation the increment it.
console.log(" This is postFix ");
var num=15;
var newNum =num++ +5; 

console.log(num);
console.log(newNum);

// preFix
// first increment the evaluate it

console.log(" This is preFix ");
var myNum=15;
var myNewNum= ++myNum + 5;
console.log(myNum);
console.log(myNewNum);

*/

// decrement operator
// postFix 
// first evaluate the operation the increment it.
console.log(" This is postFix ");
var num=15;
var newNum =num-- +5; 

console.log(num);
console.log(newNum);

// preFix
// first increment the evaluate it

console.log(" This is preFix ");
var myNum=15;
var myNewNum= --myNum + 5;
console.log(myNum);
console.log(myNewNum);

// Challenge Time
console.log("*** Challenge Time ***");
//question_01
console.log(3**3);

//question_02
var value= 34 + "tusahr";
console.log(value);

//question_03
// swap the number
var first=10;
var second = 20;

temp=second;
second=first;
first=temp;
console.log("this is first: "+first);
console.log("This is Second :"+second);

//question_04
// swap the m=number without third variable
a=10;
b=20;

a=a+b; //30
b=a-b; //30-20 = 10
a=a-b; // 30-10 = 20

console.log("a :"+a );
console.log("b :"+b );

// Different between == and ===
x=2
y="5"

console.log(x==y);
console.log(x===y);

