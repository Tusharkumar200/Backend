//  flat the array

const arr=[
    ['zone_1','zone_2'],
    ['zone_3','zone_4'],
    ['zone_5','zone_6'],
    ['zone_7','zone_08','zone_09']
];

let a = arr.flat(Infinity); 
console.log(arr.flat(Infinity));
console.log(a);

const person = {
    name: "tushar kumar",
    age : 18
};
// console.log(Object.fromEntries(person)); 