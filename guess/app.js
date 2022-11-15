
let previousGuesses = [];
let randomNumber = Math.ceil(Math.random() * 100 + 1);

let numberOfAttempts = 9;



const lowOrHi = document.querySelector(".lowOrHi");



document.title = "Guess the number";



// Functions starts from here



function checkGuess() {

  let guess = parseInt(document.getElementById("guessField").value);



  previousGuesses.push(guess);



  const guessesRemaining = (document.querySelector(".lastResult").innerHTML =

    numberOfAttempts);



  const guessSlot = (document.querySelector(".guesses").innerHTML =

    previousGuesses);



  if (guessesRemaining == 0) {

    alert("you are out of guesses");

  }



  if (guess === randomNumber) {

    alert("You guessed it correctly!!!!");

    numberOfAttempts--;

  } else if (guess > randomNumber) {

    alert("You guessed it more!!");



    numberOfAttempts--;

  } else {

    alert("You guessed it less!!!");



    numberOfAttempts--;

  }

}