'use strict';

// calcAge(); 

// function calcAge(birthYear) {
//     const age = 2022 - birthYear;
//     console.log(firstName);
    
//     function printAge() {
//         console.log(`You are of ${age}, born in ${birthYear}`);
//         console.log(firstName);

//         if(birthYear >= 1981 && birthYear <= 2003)
//         {
//             const str =  `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);
//         }
//     }

//     printAge();
//     return age;
// }

// const firstName = "Janvi";
// calcAge(2001);

// console.log(me);   // undefined
// console.log(job);   // Eroor
// console.log(year);   // Eroor



// var me = "janvi";
// let job = "programmer";
// const year = 2001;

// console.log(me);   
// console.log(job);   
// console.log(year);   


// // Function
// console.log(addDecl(2,3));  // 5
// // console.log(addExpr(2,4));  // Error
// // console.log(addArrow(2,5));   // Error


// function addDecl(a,b) {
//     return a+b;
// }

// let addExpr = function (a,b) {
//     return a+b;
// }

// let addArrow = (a,b) => a+b;


// // console.log(addDecl(2,3));  // 5
// // console.log(addExpr(2,4));  // Error
// // console.log(addArrow(2,5));   // Error



// var x =1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

// const calcA = function (bt) {
//     console.log(2022-bt);
//     console.log(this);
// }

// calcA(2001);

// const calcArrow = bt => {
//     console.log(2022-bt);
//     console.log(this);
// }

// calcArrow(2001);


// const janvi = {
//     year: 2001,
//     calcAg: function() {
//         console.log(this);
//         // console.log(2022- this.year);
//     }
// };

// janvi.calcAg();

// const eleven = {
//     year: 2008
// };

// eleven.calcAg = janvi.calcAg;

// eleven.calcAg();

// const f = janvi.calcAg;
// console.log(f);
// f(); 
// var firstName = "Happy";

const janvi = {
    firstName: 'Janvi',
    year: 2001,
    calcAge: function () {
        console.log(this);
        console.log(2022-this.year);

        // const self = this;
        // const isMillenial = function() {
        //     console.log(self);
        //     console.log(self.year >= 1998 && self.year <= 2008);
        // }

        // const self = this;
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1998 && this.year <= 2008);
        }
        isMillenial();
    },

    greet: function(){ console.log(`Hey, ${this.firstName}`)}
};
janvi.greet();
janvi.calcAge();
// console.log(this.firstName);








let addExpr = function (a,b) {
    console.log(arguments);
    console.log(a+b);
    return a+b;
}
addExpr(2,5);
addExpr(2,4,5,6);

let addArrow = (a,b) => {
    // console.log(arguments);    // arguments keyword is not defind in arrow function
    console.log(a+b);
    return a+b;
};

addArrow(2,5);

let age = 21;
let oldAge = age;
age = 20;
console.log(age);
console.log(oldAge);

const me = {
    name: 'janvi',
    age: 21
};

const friend = me;
friend.age = 22;


console.log('friend: ', friend);
console.log('me: ', me);

console.log();

const obj = {
    name: "MeObject",
    age: 20,
    family: ["mother"]
}

const copyObj = Object.assign({},obj);
copyObj.age = 19;

copyObj.family.push('father');

console.log(copyObj);
console.log(obj);



