// indexOf(itemName , starting_position) --> It will search element from index 0 to n-1 and return [7,7]--> 1 first element index if there is same element

// lastIndexOf(itemName , starting_position) --> It will search element from last element and return the correct index number if two element[7,7]--> 5 is same the it will return last element position  

// if the target element is not present in the array then it return -1 ;

let x= [5,7,1,8,4,7,10];

let Find= x.indexOf(7);
console.log(Find);
 
let Last_Find = x.lastIndexOf(7);
console.log(Last_Find);