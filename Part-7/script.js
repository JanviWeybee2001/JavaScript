'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, index) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
    </div>
  `;

  containerMovements.insertAdjacentHTML('afterbegin', html)
    // console.log(containerMovements.innerHTML);
  });
};

displayMovements(account1.movements);


const createUsernames = accs => {
  accs.forEach( acc => {
    acc.userName = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('')
  });
};

createUsernames(accounts);
console.log(accounts);

const balance = accounts.forEach( acc => {
  console.log(acc.movements);
});



// labelBalance.innerHTML = 

// const balance = movements.reduce((acc, cur) =>acc + cur,0);
// console.log(balance); 

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5];

// // SLICE
// console.log((arr.slice(2)));
// console.log((arr.slice(2, 4)));
// console.log((arr.slice(-2)));
// console.log((arr.slice(-1)));
// console.log((arr.slice(1, -2)));
// console.log((arr.slice()));
// console.log([...arr].slice(2));
// console.log([...arr]);


// // SPLICE - mutable real array
// // console.log((arr.splice(2))); // [4, 5, 6, 7, 8, 9]
// console.log(arr.splice(-1));
// console.log(arr);
// console.log(arr.splice(2, 2));
// console.log(arr.splice(2, 4));
// console.log(arr);

// // REVERSE - mutable real array 
// console.log('Reverse array: ', arr.reverse());
// console.log(arr);

// // CONCAT
// const arr2 = [11, 22, 33];
// const letter = arr.concat(arr2);
// console.log(letter);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letter.join('-'));

// const arr1 = [11, 22, 33, 44];
// console.log(arr1[0], arr1.at(0));

// // getting last array element
// console.log(arr[arr.length - 1], arr.slice(-1)[0], arr.at(-1));

// for (const movement of movements) {
//   if (movement > 0)
//     console.log(`You deposited ${movement}`);
//   else
//     console.log(`You withdrew ${Math.abs(movement)}`);
// }


// console.log('----FOREACH----');
// movements.forEach(function (movement, index, array) {
// if (movement > 0) 
//   console.log(`You deposited ${movement} .. ${index},,   ${array}`);
// else
//   console.log(`You withdrew ${Math.abs(movement)}.. ${index},,   ${array}`);
// })


// console.log('----MAP FOREACH----');
// currencies.forEach(function(value, key, map){
//   console.log(`${key}: ${value}`);
// })

/*
//  CODING CHALLENGE 1


function checkDogs(dogsJulia, dogsKate) {
  const dogsJuliaCopy = [].concat(dogsJulia);
  dogsJuliaCopy.splice(0,1);
  dogsJuliaCopy.splice(-2);
  
  const dog = dogsJuliaCopy.concat(dogsKate);
  dog.forEach(function(d, index){
    const age = d >= 3 ? `an adult, and is ${d} years old` : `still a puppy`;
    console.log(`Dog number ${index+1} is ${age}.`);
  })

}


const dogsJulia1 = [3,5,2,12,7];
const dogsKate1 = [4,1,15,8,3];

const dogsJulia2 = [9,16,6,8,3];
const dogsKate2 = [10,5,6,1,4];

checkDogs(dogsJulia1, dogsKate1);
console.log('-------------------------------------------------');
checkDogs(dogsJulia2, dogsKate2);

// CHALLENGE 1 COMPLETED

*/


// MAP method
const movements = account1.movements;

// const eurToUsd = 1.1;
// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementDescription = movements.map(
//   (mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// );

// console.log(movementDescription); 

// FILTER METHOD


/*

const deposits = movements.filter(function(mov){
  return mov > 0;
});

const withdrawals = movements.filter(mov => mov<0);

console.log(deposits);
console.log(withdrawals);

*/

// accumulator -> SNOWBALL
// const balance = movements.reduce(function(acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc+ cur;
// },0);

