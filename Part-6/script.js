// 'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numnPassengers = 1, price = 199 * numnPassengers)
// {
//     // ES5
//     // numnPassengers = numnPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numnPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123',2,800);
// createBooking('LH123',2);
// createBooking('LH123',5);

// createBooking('LH123', undefined, 1000);
// console.log(bookings);

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//     const [first, ...other] = str.split(' ');
//     return [first.toUpperCase(), ...other].join(' ');
// }

// // Higher order function 
// const transform = function (str, fn) {
//     console.log(`Original String : ${str}`);
//     console.log(`Transform String : ${fn(str)}`);

//     // fn.name used for knowing the name of function...
//     console.log(`Transform by : ${fn.name}`);

// };

// transform('janvi is a intern at WeyBee',upperFirstWord);

// const high5 = function() {
//     console.log(`Hello..`);
// }

// // document.body.addEventListener('click',high5);


// const str = 'my_name%is**Janvi^desai';
// console.log(str);

// let index = 0;
// let len = str.length;
// let finalStr = '';

// for(let i=0;i<len;i++)
// {
//     if((str[i]>='a' && str[i]<='z') || (str[i]>='A' && str[i]<='Z'))
//     {
//         if(index%2==0){
//             finalStr += str[i].toUpperCase();
//         }
//         else{
//             finalStr += str[i].toLowerCase();
//         }
//         index++;
//     }
//     else
//     {
//         finalStr += str[i];
//     }
// }
// console.log(finalStr);


// // const arrIndex = new Set;
// // let index = 0;

// // for(let i=0;i<str.length;i++)
// // {
// //     arrIndex.add(str.indexOf(' ' , i));
// // }

// // arrIndex.delete(-1);
// // const [...arr] = [...arrIndex];
// // const Answer = str.replaceAll(' ','');
// // let tempStr = '';

// for(let i=0;i<Answer.length;i++)
// {
//     if(i%2 == 0)
//         tempStr += Answer[i].toUpperCase();
//     else
//         tempStr += Answer[i].toLowerCase();
// }
// let finalAnswer = tempStr.slice(0,arr[0]);
// let len = arr.length;
// for(let i = 0; i< len; i++)
// {
//     finalAnswer += ' ' + tempStr.slice(arr[i]-i,arr[i+1]-i-1);
// }
// finalAnswer+=tempStr.slice(arr[len-1]-len+1);
// console.log(finalAnswer);


// // const str = 'my name is janvi Desai';
// // console.log(str);

// // let len = str.length;
// // let finalAnswer = '';
// // // console.log(fontCase);
// // finalAnswer += str[0].fontCase;
// // console.log(finalAnswer);
// // for(let i = 0; i< len ; i++)
// // {

// // }


// const lufthanasa = {
//     airline: 'Lufthanasa',
//     iataData: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataData}${flightNum}`);
//         this.bookings.push({flight: `${this.iataData}${flightNum}`, name});
//     }
// };

// lufthanasa.book(239,'Janvi Desai');
// console.log(lufthanasa);


// const eurowings = {
//     airline: 'Eurowings',
//     iataData: 'EW',
//     bookings: []
// }

// const book = lufthanasa.book;


// book.call(eurowings,23,'Happy rena');

// let flightData = [45, 'Riya Jain'];
// book.call(lufthanasa, ...flightData);
// flightData = [45, 'Hanny Mathur'];
// book.apply(lufthanasa, flightData);


// console.log(lufthanasa);

// lufthanasa.plane = 300;
// lufthanasa.buyPlane = function() 
// {
//     // console.log(this);
//     this.plane++;
//     console.log(this.plane);
// }

// document.querySelector('.buy').addEventListener('click',lufthanasa.buyPlane.bind(lufthanasa));

// -------------------------CODING CHALLENGE 1------------------------------

const poll = {
    quetion: 'What is your favorite programming language ?',
    options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    // Get answer
    registerNewanswer() {
        const answer = Number(
            prompt(
                `${this.quetion}]\n${this.options.join('\n')}\n(Write option number)`
            )
        );
        console.log(answer);

        // Register answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

        // this.displayResult();
        this.displayResult('string');
    },
    displayResult(type = 'array'){
        if(type === 'array'){
            console.log(this.answers);
        }
        else if (type === 'string')
        {
            console.log(`poll results are ${this.answers.join(', ')}`);
        }
    }
};

const displayResult = function (answer) {
    if (answer === Object)
        console.log(answer);
    else
        console.log(`poll result are ${answer}`);
}

document.querySelector('.poll').addEventListener('click', poll.registerNewanswer.bind(poll));

poll.displayResult.call({answers: [5,2,3]}, 'string');
poll.displayResult.call({answers: [1,5,3,9,6,1]}, 'string');
poll.displayResult.call({answers: [1,5,3,9,6,1]});

//------------------CHALLENGE 1 COMPLETED--------------------------------


const runOnce = function () {
    console.log(`This will run once`);
}

const secureBooking = function()
{
    let passengers = 0;

    return function() {
        passengers++;

        console.log(`${passengers} passengers`);
    };
};

const booker = secureBooking();
booker();
booker();
booker();
booker();
// console.dir(booker);

let f;

const g = function () {
    const a = 10;
    f = function() {
        console.log(a*2);
    }
}

const h = function () {
    const b= 5;
    f = function() {
        console.log(b*2);
    }
}
g();
console.dir(f)
f();

h();
console.dir(f)
g();
f();

(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click',function(){
        header.style.color = 'blue';
    })
})();