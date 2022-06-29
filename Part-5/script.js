'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex = 1, time, mainIndex = 1, address }) {
    console.log(
      `Order recieved!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasts: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (maining, ...other) {
    console.log(`Here is your delicious pizza with ${maining} and also with ${other}`);
    console.log(maining, other);
  }

};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21'
});

console.log(restaurant.location);
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

// Defaults values... 

const { menuu = [], starterMenu: starters = [] } = restaurant;
console.log(menuu, starters);

// Mutating variables
let a = 111;
let b = 999;
console.log(a, b);
const obj = { a: 23, b: 7, c: 24 };
({ a, b } = obj);
console.log(a, b);

// nested objects

const { sat: { open: o, close: c } } = openingHours;
console.log(o, c);


// Destructing Arrays 

// const arr = [2,3,4];
// const a = arr[0]; 
// const b = arr[1];
// const c = arr[2]; 
// const [x,y,z] = arr 

let [first, second] = restaurant.categories;
console.log(first, second);
let [menu, , secondary] = restaurant.categories;
console.log(menu, secondary);


// Switching elements

// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

// console.log([main, secondary] == [secondary, main]);

let [starter, mainCourse] = restaurant.order(3, 2);
console.log(starter, ",", mainCourse);
console.log(starter + " , " + mainCourse);


// Nested destucting

let nested = [2, 4, [6, 8]];
var [i, , j] = nested;
console.log(i, j);
var [i, , [j, k]] = nested;
console.log(i, j, k);


//  Default values
let [p, q, r] = [8, 9];
console.log(p, q, r);

[p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);


const arrr = [7, 8, 9];
const badNewArr = [1, 2, arrr[0], arrr[1], arrr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arrr];
console.log(newArr);

const newArrr = [1, 2, arrr];
console.log(newArrr);

console.log(...newArr);
console.log(...newArrr);

const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(...newMenu);

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const menuuu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuuu);

// Iterables: arrays, strings, maps, sets. NOT objects

const str = 'janvi';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// const ingre .orderPasts(...ingredients);

console.log("hello, Pasta");

console.log(restaurant);


const newRestaurant = { foundIn: 2001, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// SPREAD, because on RIGHT side of = 
const ar = [1, 2, ...[3, 4]];

// REST, beacause on LEFT side of =
const [aa, bb, ...other] = [1, 2, 3, 4, 5];
console.log(ar, "      ", aa, bb, other);

const [pizza, , Risotto, ...otherfood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, Risotto, otherfood);

// Objects
const { fri, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Function 
const add = function (...number) {
  // console.log(number.length);
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  console.log("Sum = ", sum);
}
add(2, 3);
add(2, 5, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

let dd = [1, 2, 3, 4, 5];
add(...dd);

let ddd = ['e', 'b', 'c', 'd']
restaurant.orderPizza('a', ...ddd);
restaurant.orderPizza('a', 'n', 'm');
restaurant.orderPizza('a');

// Use ANY data tye, return ANY data type, SHORT-CIRCUITING
console.log(3 || "a");
console.log(null || "a");
console.log(undefined || ''); // IT's not print anything 
console.log(undefined || null || 0 || 'hello' || 23);

console.log('----AND----');
console.log(0 && 'a');
// if First value is false , then it is not check the second value and print that first value
console.log(4 && 'a' && 1 || 'b');  // 1
//  if First value is true , then it is check the second value and print that second value

// in AND condition, console print the last true value 
// in OR condtion, console print the first true value

console.log(4 && 'a' || 1 && 'b');  // a

restaurant.orderPizza && restaurant.orderPizza('a', 'c')

// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// restaurant.numGuests = 23;
// const guest2 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest2);


// const guest = restaurant.numGuests || 10;
// console.log(guest);

// Nullish: null and undefined (NOT 0 or ';)
restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

const guest = restaurant.numGuests || 10;
console.log(guest);

const rest1 = {
  name: 'Capri',
  numGuests: 20
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
}

rest1.numGuests = rest1.numGuests || 10;  // rest1.numGuests ||= 10;
rest2.numGuests = rest2.numGuests || 10;  // rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);






4 > 5 && console.log("five");
5 > 4 && console.log('Four');

const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const i of menu1) console.log(i);

for (const i of menu1.entries()) {
  console.log(`${i[0] + 1}: ${i[1]}`);
}

console.log(restaurant.openingHours.mon?.open);

for (const obj of Object.keys(restaurant)) {
  console.log(obj);
}


for (const obj of Object.values(restaurant)) {
  console.log(obj);
}




// SETS

const orders = new Set(['pizza', 'pasta', 'Risotto', 'pizzaa', 'pizza']);
console.log(new Set("happy"));
console.log(orders);

const rr = {
  name: 'rushita',
  22: 'ef'
} // IT's give error on print "rr.22"

const rest = new Map();
rest.set('name', 'janvi');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

rest
  .set('categories', ['Italian', 'Pizzaria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(')

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(
  rest.get(time > rest.get('open')
    && time < rest.get('close'))
);

console.log(`size ----------- ${rest.size}`);
rest.set([3,4],'Test');

console.log(`size ----------- ${rest.size}`);
console.log(rest.get([3,4]));  //  this [3,4] & that [3,4] are occupy different memory location in heap ... tha's why it not print the value but print the "undefined"

const arr = [5,6];
rest.set(arr,'Test');
console.log(`size ----------- ${rest.size}`);
console.log(rest.get(arr));

rest.set(document.querySelector('h1'),"heading");
console.log(`size ----------- ${rest.size}`);

const quetion = new Map([
  ['quetion', 'What is the best programming language in the world?'],
  [1,'C'],
  [2,'Java'],
  [3,'JavaScript'],
  ['correct',3],
  [true, 'Correct'],
  [false, 'Try again']
]);
console.log(quetion);
  
// Quiz app
console.log(quetion.get('quetion'));
for(const [key, value] of quetion) {
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
console.log(quetion.get('correct'));
// const answer = Number(prompt('Your answer'));
// console.log(answer == quetion.get('correct') ? quetion.get(true) : quetion.get(false));


console.log(...quetion);

  

// ---------------STRING-------------------   


const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log('B737'[0]);

console.log(airline.length );
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.slice(2));
console.log(airline.slice(2,9));
console.log(airline.slice(-2));
console.log(airline.slice(1,-2));

console.log(new String("Janvi"));
console.log(typeof new String("Janvi"));


// Capitalizing..
var Name = 'janVI';
var NameLower = Name.toLowerCase();
var NameCorrect = NameLower[0].toUpperCase() + NameLower.slice(1);
console.log(NameCorrect);

// replacing..

const PriceGB = '288,97R';
const priceUS = PriceGB.replace('R','$');
console.log(priceUS);

const annoucement = 'All passenger come to barding door 23. Boaring door 23!';
console.log(annoucement.replaceAll('door','gate'));
console.log(annoucement.replace(/door/g,'gate'));

console.log(annoucement.includes('All'));
const fN = 'Janvi';
const lN = 'Desai';
const newName  = ['miss.', fN, lN].join(' ');
console.log(newName);
console.log(fN.padStart(25,'+').padEnd(30,'+'));


// CODING CHALLENGE 1

console.log('-----CODING CHALLENGE 1-----');

// const allPlayers = [...player1,...player2];

// const players1final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];

//-----------CHALLENGE 2----------
const scores = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2
};
//--------------------------------

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'gotze',
    ]
  ],
  score: '4:0',
  scores,
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2022',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  }
};

const [player1, player2] = [...game.players];
console.log(player1, player2);

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const [goalKeeper1, ...fieldPlayer1] = player1;
const [goalKeeper2, ...fieldPlayer2] = player2;

console.log(goalKeeper1, " ", fieldPlayer1);
console.log(goalKeeper2, " ", fieldPlayer2);


const players1final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1final);

const { team1: t1, x: x, team2: t2 } = game.odds;
console.log(t1, x, t2);

game.printGoals = function (...player) {
  console.log(player);
  console.log(`${player.length} goals were scored`);
}

// game.printGoals('Davies','Muller', 'Lewandowski','Kimmich');
// game.printGoals('Davies','Muller');

game.printGoals(...game.scored);

t1 < t2 && console.log('Team1 is more likely to win');
t1 > t2 && console.log('Team2 is more likely to win');

// CHALLENGE 1 COMPLETED


// CODING CHALLENGE 2

console.log('-----CODING CHALLENGE 2-----');

const scoredPlayer = game.scored;

for (const player of scoredPlayer.entries()) {
  console.log(`Goal ${player[0] + 1}: ${player[1]}`);
}

let avg = 0;
console.log(Object.values(game.odds));

for (const odd of Object.values(game.odds)) {
  avg += odd;
}
console.log(avg / 3);

const oddScore = Object.entries(game.odds);
console.log(oddScore);

for (const odd of oddScore) {
  //  console.log(`Odd of victory ${game[odd[0]]??'draw'}: ${odd[1]}` );

  // game[odd[0]] || console.log(`Odd of draw: ${odd[1]}`); 
  // game[odd[0]] && console.log(`Odd of victory ${game[odd[0]]}: ${odd[1]}` );

  const teamStr = odd[0] === 'x' ? 'draw' : `victory ${game[odd[0]]}`;
  console.log(`Odd of ${teamStr}: ${odd[1]}`);
}

console.log(game);
// CHALLENGE 2 COMPLETED



// CODING CHALLENGE 3

console.log('-----CODING CHALLENGE 3-----');

const gameEvents = new Map([
 [17, 'GOAL'],
 [36, 'Substitution'],
 [47, 'GOAL'],
 [61, 'Substitution'],
 [64, 'Yellow Card'],
 [69, 'Red card'],
 [70, 'Substitution'],
 [72, 'Substitution'], 
 [76, 'GOAL'],
 [80, 'GOAL'],
 [92, 'Yellow Card'],
]);

console.log(gameEvents.values());
const eventSet = new Set(gameEvents.values());
const eventArr = [...eventSet];

console.log(eventArr);
gameEvents.delete(64);

console.log(`-------64 is deleted-------`);
console.log(gameEvents);

console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

const times = [...gameEvents.keys()].pop();
console.log(times);
console.log(`An event happened, on avarage, every ${time/gameEvents.size}`);

for (const [min, event] of gameEvents)
{
  const half = min <=45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

// CHALLENGE 3 COMPLETED


// CODING CHALLENGE 4

console.log('-----CODING CHALLENGE 4-----');

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function(){
  const str = document.querySelector('textarea').value;
  const strLower = str.toLocaleLowerCase();
  const index = strLower.indexOf('_');
  const ansStr = strLower.slice(0,index+1).replace('_','') + strLower[index+1].toUpperCase() + strLower.slice(index+2,strLower.length);
  console.log(ansStr);
})

// function camelCase(str)
// {
//   const newStr = str[0].toUpperCase() + str.slice(1);
//   return newStr;
// }

// CHALLENGE 4 COMPLETED


const ooo = {
  name: 'ooo',
  index: 23
}

const mapp = [2,'fgt','grrb'];
console.log(...mapp);

console.log(...ooo);