

const myObj={
    myHome: 'Nawada',
    mySchool: 'DPS Nawada',
    

    myfun(){
        console.log(`my home is ${this.myHome} and my school name is ${this.mySchool}`);
       
    }
}


const mySelf={
    myName: 'Tushar kumar',
    myfunName(){
        console.log(this.myName);
    }
};
let display = myObj.myfun();
console.log(display);
mySelf.myfunName();