'use strict';

const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const scoreOne = document.getElementById('score--0');
const scoreTwo = document.getElementById('score--1');
const currentOne = document.getElementById('current--0');
const currentTwo = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;
const scores = [0, 0];
let currentPlayer = 0;
let activePlayer = 0;

// Starting conditions
scoreOne.textContent = 0;
scoreTwo.textContent = 0;
dice.classList.add('hidden');
let playing = true;


// function for swithing the player
const switchPlayer = function () {
    // Switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;

    // Change background color
    playerOne.classList.toggle('player--active');
    playerTwo.classList.toggle('player--active');
}




// New game functionality
btnNew.addEventListener('click', function () {
    // Reset scores
    scoreOne.textContent = 0;
    scoreTwo.textContent = 0;
    currentOne.textContent = 0;
    currentTwo.textContent = 0;

    // Reset background color
    playerOne.classList.remove('player--winner');
    playerTwo.classList.remove('player--winner');
    playerOne.classList.add('player--active');
    playerTwo.classList.remove('player--active');

    // Reset active player
    activePlayer = 0;
    currentScore = 0;
    scores[0] = 0;
    scores[1] = 0;

    // Hide dice
    dice.classList.add('hidden');
});


// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {

        // 1. Generate a random dice roll
        const diceRoll = Math.trunc(Math.random() * 6) + 1;

        // 2. Display dice
        dice.classList.remove('hidden');
        dice.src = `dice-${diceRoll}.png`;

        // 3. Check for rolled 1: if true, switch to next player
        if (diceRoll !== 1) {
            // Add dice to current score
            currentScore += diceRoll;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});





btnHold.addEventListener('click', function () {
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 20) {
            playing = false;
            // Finish the game
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
            dice.classList.add('hidden');
        } else {
            // Switch to the next player
            switchPlayer();
        }
    }
}
);