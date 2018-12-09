var wins = 0;
var losses = 0;
var gLeft = 9;
var myGuess = [];

var winText = document.getElementById("Wins");
var lossesText = document.getElementById("Losses");
var guessesText = document.getElementById("Guesses");
var yourText = document.getElementById("Your")

var compchoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]


document.onkeyup = function (event) {
    var userChoice = event.key;

    var computerChoice = compchoices[Math.floor(Math.random() * compchoices.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    if (options.indexOf(userChoice) > -1) {

        if (userChoice === computerChoice) {
            wins++;
            gLeft = 9;
            myGuess = [];
        }

        if (userChoice != computerChoice) {
            gLeft --;
            myGuess.push(userChoice);
            console.log(userChoice);
            console.log(computerChoice);
        }

        if (gLeft === 0) {

            gLeft = 9;
            losses ++;
            myGuess = [];

        
        }
    }







}
