'use strict'

let location1 = 3,
    location2 = 4,
    location3 = 5;

let guess;   // номер текущей попытки
let hits = 0; // попадания
let guesses = 0; // количество попыток
let isSunk = false;  // корабль потоплен

while (isSunk == false) {
    guess = prompt('Ready, aim, fire! (enter a number 0-6 )', '');

    if (guess < 0 || guess > 6) {
        alert ('Please, enter a valid cell number!', '')
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert('Hit!');
            if (hits == 3) {
                isSunk == true;
                alert('You sunk my shipp!');
            }
        } else {
            alert('Miss!');
        }
        
    }
    
}

let stats = 'You took' + guesses + 'guesses to sunk the ship,' + 'whish means your shooting accuracy was'(3 / guesses);
alert(stats);