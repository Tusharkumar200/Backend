// Modern JavaScript

// let and const --> block scop

// function biodata(){
//     let name = "tushar";
//     let age = 18;
//     if(true){
//         console.log(name);
//         let std= " B.Tech";
//     }
//     console.log(std);
// }

// biodata();

// Template-litres

// var table=15
// for(var i=1; i<=10;i++){
//     // console.log(table + " x "+i +"= "+i*table)
//     console.log(` ${table} X ${i} = ${i*table}`)
// }

// Default argument

function mul(a,b=5){
    return a*b;
}

a=mul(5,4)
console.log(a);