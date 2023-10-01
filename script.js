'use strict';

const scoreOne = document.getElementById('score--0');
const scoreTwo = document.getElementById('score--1');
const currentOne = document.getElementById('current--0');
const currentTwo = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

// Starting conditions
scoreOne.textContent = 0;
scoreTwo.textContent = 0;
dice.classList.add('hidden');

// Rolling dice functionality

btnRoll.addEventListener('click', function () {

    // 1. Generate a random dice roll
    const diceRoll = Math.trunc(Math.random() * 6) + 1;


    // 2. Display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${diceRoll}.png`;

    // 3. Check for rolled 1: if true, switch to next player
    if (diceRoll !== 1) {
        // Add dice to current score
        currentScore += diceRoll;
        currentOne.textContent = currentScore;
    } else {

        // Switch to next player
    }
});




