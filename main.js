var userMin = document.getElementbyId("lower-range").value;
var userMax = document.getElementbyId("upper-range").value;
var setRange = document.getElementbyId("range-button");
var p1Name = document.getElementbyId("name1").value;
var p1Guess = document.getElementbyId("guess1").value;
var p2Name = document.getElementbyId("name2").value;
var p2Guess = document.getElementbyId("guess2").value;
var submitGuesses = document.getElementbyId("button-submit");
var resetAll = document.getElementybyId("button-reset");
var clearGame = document.getElementbyId("button-clear");
var randomNumber;


function generateNumber (max, min){
  return Math.floor(Math.random() * (+max - +min) + +min); 
}

randomNumber = generateNumber(userMax, userMin);



setRange.addEventListener('click', function(){
  if (userMin == "") {
    userMin = 1;
  }
  if (userMax == "") {
    userMax = 100;
  }
});






var challengerOneName = document.querySelector(#)
button.addEventListener('click', fun)
