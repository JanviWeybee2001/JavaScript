'use strict';

const Euro = '€';

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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, index) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
    <div class="movements__value">${mov}${Euro}</div>
    </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html)
    // console.log(containerMovements.innerHTML);
  });
};

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance}${Euro}`;
}

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes}${Euro}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(out)}${Euro}`;

  const insert = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int > 1)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${insert}${Euro}`
}


const createUsernames = accs => {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('')
  });
};


createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcPrintBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
}

// Event Handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();


  currentAccount = accounts.find(acc => acc.userName === inputLoginUsername.value);
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // clear input feilds
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.userName === inputTransferTo.value);

  if (amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.userName !== currentAccount.userName) {
    // doing transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }

  inputTransferAmount.value = inputTransferTo.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 &&
    currentAccount.movements.some(mov => mov >= mov * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
})

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.userName === currentAccount.userName);
    accounts.splice(index, 1);
    console.log(accounts);
    containerApp.style.opacity = 0;
  }
  labelWelcome.textContent = `Log in to get started`;
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted
})


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

// Maximum Value

// const max = movements.reduce((acc,mov) => {
//    if(acc>mov) return acc;
//    else return mov;
// },movements[0]);

// console.log(max);


/*
//  CODING CHALLENGE 2

const calcAverageHumanAge = data => {
  return data.map(age => age <= 2 ? 2*age : 16+age*4);
};

const testData1 = [5,2,4,1,15,8,3];
const testData2 = [16,6,10,5,6,1,4];

const humanAge1 = [].concat(calcAverageHumanAge(testData1));
const humanAge2 = [].concat(calcAverageHumanAge(testData2));

const adultHuman = humanAge => humanAge.filter(age => age >= 18);
const adultHuman1 = [].concat(adultHuman(humanAge1));
const adultHuman2 = [].concat(adultHuman(humanAge2));

const averageHuman = humanAge => humanAge.reduce((acc, age) => acc+age,0)/humanAge.length;
const averageHumanAge1 = averageHuman(adultHuman1);
const averageHumanAge2 = averageHuman(adultHuman2);
console.log(`-------------TEST DATA 1-------------`);
console.log(testData1);
console.log(humanAge1);
console.log(averageHumanAge1);
console.log(adultHuman1);

console.log(`-------------TEST DATA 2-------------`);
console.log(testData2);
console.log(humanAge2);
console.log(averageHumanAge2);
console.log(adultHuman2);


// CHALLENGE 2 COMPLETED

*/

// const deposited = movements.filter(mov => mov > 0).reduce((acc, cur) => acc + cur, 0);
// console.log(deposited);


/*
//  CODING CHALLENGE 3


const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = ages => ages
  .map(age => age <= 2 ? age * 2 : 16 + age * 4)
  .filter(age => age >= 18)
  .reduce((acc, cur, _, arr) => acc+cur/arr.length,0);

console.log(calcAverageHumanAge(testData1));
console.log(calcAverageHumanAge(testData2));

// CHALLENGE 3 COMPLETED

*/


console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

//SOME: CONDITION
console.log(movements.some(mov => mov < 0));

const anyDeposit = movements.some(mov => mov > 0);
console.log(anyDeposit);

// EVERY
const everyDeposit = movements.every(mov => mov > 0);
console.log(everyDeposit);

// Separate callback
const deposit = mov => mov < 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
/*
for(let i=0;i<a.length;i++)
    { 
        if(a[i].length > 1) 
        {
            for(let j=0;j<a[i].length;j++)
            {
                console.log(a[i][j]);
            }
        }
        else 
        {
            console.log(a[i]);
        }
    }
*/

const arrdeep = [[[1, 2], 3], [4, [5, 6]], [7], 8];
console.log(arrdeep.flat(2));

console.log(movements);
movements.push(300);
console.log(movements.sort());


 /*
//  CODING CHALLENGE 4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] }
  
];

//1. 
const recommendedAllFood = dogs => {
  dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));
};

recommendedAllFood(dogs);
console.log(dogs);

//2. 
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);

console.log(`Sarah's dog is eating Too ${sarahDog.curFood > sarahDog.recFood ? 'Much' : 'Little'}`);

//3. 
const dogTooMuch = dogs.filter(dog => dog.curFood > dog.recFood);
const dogTooLittle = dogs.filter(dog => dog.curFood < dog.recFood);
console.log(dogTooMuch);
console.log(dogTooLittle);

//4.
const ownerTooMuch = dogTooMuch.map(dog => dog.owners);
const ownerTooLittle = dogTooLittle.map(dog => dog.owners);;
console.log(`${ownerTooMuch.flat().join(' and ')}'s dogs eat too much.`);
console.log(`${ownerTooLittle.flat().join(' and ')}'s dogs eat too little.`);

//5.
console.log(Boolean(dogs.find(dog => dog.curFood == dog.recFood)));

//6.
console.log(Boolean(dogs.find(dog => (dog.curFood < dog.recFood * 1.1) && (dog.curFood > dog.recFood * 0.9))));

//7.
console.log(dogs.filter(dog => 
  (dog.curFood < dog.recFood + dog.recFood * 0.1)
  && (dog.curFood > dog.recFood - dog.recFood * 0.1)));

//8.
const copyDogSorted = [].concat(dogs);
console.log(dogs);
console.log(copyDogSorted.sort((a,b)=>{
  if(a.curFood > b.curFood) return 1;
  else return -1;
}));

// CHALLENGE 4 COMPLETED

*/