// finding leap year

var year = 2000;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("Year " + year + " is  a leap year");
        }
        else {
            console.log("Year " + year + " is not a leap year");
        }
        console.log("Year " + year + " is not a leap year");
    }
    else {
        console.log("Year " + year + " is  a leap year");
    }
}
else {
    console.log("Year " + year + " is not a leap year");
}

// Falsy value in javascript
//  There are five falsy value in js 1. '0' 2.undefine 3.NaN 4.null 5.false

if(score=5){
    console.log("We loss the match");
}
else{
    console.log("We win the match");
}

//  Ternary operator

var age=17;
var myAge= (age>=18)?"you can vote": " you can't vote";
console.log(myAge);
