var userMin = document.getElementbyId('lower-range').value;
var userMax = document.getElementbyId('upper-range').value;
var setRange = document.getElementbyId('range-button');
var p1NameInput = document.getElementbyId('name-1').value;
// var p1Name = document.querySelector('.p1-rename');
var submitGuesses = document.getElementbyId('button-submit');
var p1Guess = document.getElementbyId('guess-1').value;
var p2Name = document.getElementbyId('name-2').value;
var p2Guess = document.getElementbyId('guess-2').value;
var resetAll = document.getElementybyId('button-reset');
var clearGame = document.getElementbyId('button-clear');
var randomNumber;


function generateNumber (max, min){
  return Math.floor(Math.random() * (+max - +min) + +min); 
}

randomNumber = generateNumber(userMax, userMin);




changeP1Name.addEventListener('click' function(){
  var p1 = p1NameInput.value;
  p1-rename.innerText = p1NameInput;
});

// setRange.addEventListener('click', function(){
//   if (userMin == "") {
//     userMin = 1;
//   }
//   if (userMax == "") {
//     userMax = 100;
//   }
// });









// var challengerOneName = document.querySelector(#)
// button.addEventListener('click', fun)
