
var lacationl = 3;
var lacationl = 4;
var lacationl = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
while (isSunk == false){
  guess = prompt("Ready,aim,fire! (enter a number 0-6):");
  if (guess < 0 || guess > 6){
    alert("please enter a valid cell number!");
}else{
  guesses = guesses + 1;

  if (guess == location1 || guess == location2 || guess == location3) {
    hits = hits + 1;
  if (hit == 3) {
          isSunk == true;
          alert("You sank my battleship!")
  }
  }
}
}
var stats = "You took" + guessses + "guesses to sink the battleship,"  + "whic means Your shooting accuracy was " +(3/guesses);
alert(stats);
