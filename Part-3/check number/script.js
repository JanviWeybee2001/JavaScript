'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.guess').value = 23;

// const a = () => console.log(2 );

const maxNumber = 10;
const minNumber = 1;

document.querySelector('.number').textContent = "?";

let secretNumber = Math.trunc(Math.random() * maxNumber) + 1;
console.log(secretNumber);
document.querySelector('.score').textContent = maxNumber;
document.querySelector('.between').textContent = `(Between ${minNumber} and ${maxNumber})`;

let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);

function checkSecretNumber () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number !!';
    }

    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number';
        highscore++;
        document.querySelector('.highscore').textContent = highscore;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = secretNumber;
    }

    else {
        if(score > 1) {
            const scenario = guess > secretNumber ? "Too high" : "Too low";
            document.querySelector('.message').textContent = scenario;
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.number').style.width = '15rem';

            document.querySelector('.number').textContent = "?";
        }
        else
        {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
}

document.querySelector('.guess').addEventListener('change', function () {
    checkSecretNumber();
});

document.querySelector('.check').addEventListener('click', function () {
    checkSecretNumber();
});


document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector(".guess").textContent = " ";
    document.querySelector('.number').textContent = "?";
    secretNumber = Math.trunc(Math.random() * maxNumber) + 1;
    console.log(secretNumber);
});


// document.querySelector('.check').addEventListener('click', a());    //THIS IS GIVE ERROR...




