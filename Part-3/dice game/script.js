'use strict';


// Selecting elements...

const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');



// Starting conditions...

score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

const scores = [0, 0];
let currentscore = 0;
let activePlayer = 0;
let playing  = true;

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentscore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
}


// Rolling dice functionality...

btnRoll.addEventListener('click', function () {
    if(playing){
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    // 3.  Check for rolled 1
    if (dice !== 1) {
        // add dice to current score
        currentscore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentscore;
    }
    else {
        // Switch to next player
        switchPlayer();
    }
    }
});


// Holding dice functinality...

btnHold.addEventListener('click', function () {
    if(playing){
    // 1. Add current score to active player's score
    scores[activePlayer] += currentscore;
    // scores[1] = scores[1] + currentscore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    diceEL.classList.add('hidden');

    // 2. Check if player's score >= 100
    if (scores[activePlayer] >= 10) {
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else {
        switchPlayer();
    }
    // finish the game

    // switch to the next player
    }
});


// new game functinality...
btnNew.addEventListener('click', function () { 
    playing=true;
scores[0]=0;
scores[1]=0;
diceEL.classList.add('hidden');
currentscore=0;
activePlayer = 0;
if(!player0EL.classList.contains('player--active')){
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
}
if(player0EL.classList.contains('player--winner')){
    player0EL.classList.remove('player--winner');
}
else{
    player1EL.classList.remove('player--winner');
}
current0EL.textContent=scores[0];
current1EL.textContent=scores[1];
score0EL.textContent=scores[0];
score1EL.textContent=scores[1];
});








    // if (activePlayer === 0) {
    //     if (!player0EL.classList.contains('player--active')) {
    //         player0EL.classList.add('player--active');
    //     }
    //     if (player1EL.classList.contains('player--active')) {
    //         player1EL.classList.remove('player--active');
    //     }
    // }
    // else {
    //     if (!player1EL.classList.contains('player--active')) {
    //         player1EL.classList.add('player--active');
    //     }
    //     if (player0EL.classList.contains('player--active')) {
    //         player0EL.classList.remove('player--active');
    //     }
    // }