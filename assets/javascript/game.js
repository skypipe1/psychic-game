var compchoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


var wins = 0;
var losses = 0;
var gLeft = 9;
var myGuess = [];


document.onkeyup = function (event) {

    var userChoice = event.key;

    var computerChoice = compchoices[Math.floor(Math.random() * compchoices.length)];


    if (compchoices.indexOf(userChoice) > -1) {

        if (userChoice === computerChoice) {
            
            gLeft = 9;
            wins++;
            myGuess = [];
            
        }

        if (userChoice !== computerChoice) {
           
            gLeft--;
            myGuess.push(userChoice);

        }

        if (gLeft === 0) {

            gLeft = 9;
            losses++;
            myGuess = [];

        }
        

    }

    document.getElementById("Wins").innerHTML = ("Wins:" + wins);
    document.getElementById("Losses").innerHTML = ("Losses:" + losses);
    document.getElementById("Guesses").innerHTML = ("Guesses left:" + gLeft);
    document.getElementById("Your").innerHTML = ("Your guesses so far:" + myGuess);

}
