// const janvi = {
//     firstName: 'janvi',
//     lastName: 'desai',
//     birthyear: 2011,
//     job: 'programmer',
//     friendss: ['a', 'b', 'c'],
//     calcage: function () {
//         this.age = 2022 - this.birthyear;
//         return this.age;
//     },
//     hasDriversLicense: function () {
//         if(this.calcage() >= 18)
//             return true;
//         else
//             return false;
//     },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcage()}-years old ${this.job}, and she has ${this.hasDriversLicense() ? 'a' : 'no'} driver's license.`
//     }
// }


// janvi.location = 'Rajkot';
// janvi['twitter'] = '@janvi_2017';

// console.log(janvi.calcage());

// // console.log(janvi.age);


// console.log(janvi.getSummary());




// CODING  CHALLENGE 1



const Dolphins1 = 98;
const Dolphins2 = 78;
const Dolphins3 = 88;

const Koalas1 = 92;
const Koalas2 = 88;
const Koalas3 = 86;

// const avgScoreDolphins = () => (Dolphins1+Dolphins2+Dolphins3)/3;
// const avgScoreKoalas = () => (Koalas1+Koalas2+Koalas3)/3;

const avgScore = (Score1, Score2, Score3) => (Score1 + Score2 + Score3) / 3;

const avgDolphin = avgScore(Dolphins1, Dolphins2, Dolphins3);
const avgKoalas = avgScore(Koalas1, Koalas2, Koalas3);

console.log(avgDolphin);
console.log(avgKoalas);

const checkWinner = (avgDolphin, avgKoalas) => (avgDolphin > avgKoalas) ? `Dolphins win (${avgDolphin} vs. ${avgKoalas})` : `koalas win (${avgDolphin} vs. ${avgKoalas})`;


console.log(checkWinner(avgDolphin, avgKoalas));



// CHALLENGE 1 COMPLETED



// CODING  CHALLENGE 2

const bill = 100;
const tip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

console.log(tip(bill));


const bills = [125, 555, 44];
const tips = [tip(bills[0]), tip(bills[1]), tip(bills[2])]

const totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];


console.log(bills);
console.log(tips);
console.log(totalBills);



// CHALLENGE 2 COMPLETED




// CODING  CHALLENGE 3

const mark = {
    firstName: 'Mark',
    height: 1.69,
    weight: 78,
    calcBMI: function() {
        return this.weight/(this.height ** 2);
    }
}

const john = {
    firstName: 'John',
    height: 1.95,
    weight: 92,
    calcBMI: function() {
        return this.weight/(this.height ** 2);
    }
}

const getSummaryOfBMI = (mar, johnn) => { 
    if (mar.calcBMI() > johnn.calcBMI()) {
        return `${mar.firstName}'s BMI(${mar.calcBMI()}) is higher than ${johnn.firstName}'s BMI (${johnn.calcBMI()}) !`;
    }
    else
    {
        return `${johnn.firstName}'s BMI(${johnn.calcBMI()}) is higher than ${mar.firstName}'s BMI (${mar.calcBMI()}) !`;
    }
};

console.log(getSummaryOfBMI(mark, john));


// CHALLENGE 3 COMPLETED




// CODING  CHALLENGE 4

const billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tipss = [];
const totalss = [];

console.log(`Bill ${billss}`);

for (let i = 0; i < billss.length; i++) {
    tipss[i] = tip(billss[i]);
    totalBills[i] = tipss[i] + billss[i];
}

console.log(`Tips ${tipss}`);
console.log(`TotalBill ${totalBills}`);


// CHALLENGE 4 COMPLETED
