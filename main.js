// generateRandomNumber(Number(userMin.value),Number(userMax.value));
var randomNumber;
function generateRandomNumber(min,max) {
  return randomNumber = Math.floor(Math.random() * (max - min) + min);
};

var minAutomatic = 1;
var maxAutomatic = 100;

generateRandomNumber(minAutomatic, maxAutomatic);
console.log(randomNumber);

//end random number generator//

//start set range//

var userMin = document.getElementById('lower-range');
var userMax = document.getElementById('upper-range');
var updateButton = document.getElementById('range-button');
var displayMinNumber = document.getElementById('display-min');
var displayMaxNumber = document.getElementById('display-max');

updateButton.addEventListener('click', rangeGenerator);

function rangeGenerator(){
  event.preventDefault();
  displayMinNumber.innerText = userMin.value;
  displayMaxNumber.innerText = userMax.value;
  generateRandomNumber(Number(userMin.value), Number(userMax.value));
  console.log(randomNumber)
};

//end set range//

//start accept guesses//

var p1name = document.getElementById('name-1');
var p2name = document.getElementById('name-2');
var p1guess = document.getElementById('guess-1');
var p2guess = document.getElementById('guess-2');
var submitButton = document.getElementById('button-submit');
var p1Everywhere = document.querySelectorAll('.p1-rename');
var p2Everywhere = document.querySelectorAll('.p2-rename');
var p1GuessEverywhere = document.getElementById('p1-guess-id');
var p2GuessEverywhere = document.getElementById('p2-guess-id');


//start update names//

submitButton.addEventListener('click', updateAllNames);

function updateAllNames (){
  event.preventDefault();
  for (var i = 0; i < p1Everywhere.length; i++){
    p1Everywhere[i].innerText = p1name.value;
  };
  for (var i = 0; i < p2Everywhere.length; i++){
    p2Everywhere[i].innerText = p2name.value;
  }; 
};

//end update names//

//start update guesses//

submitButton.addEventListener('click', updateAllGuesses);

function updateAllGuesses (){
  event.preventDefault();
  p1GuessEverywhere.innerText = p1guess.value;
  p2GuessEverywhere.innerText = p2guess.value;
  liveFeedback1();
  liveFeedback2();
}; 

//end update guesses//


//start reset button-just guesses//

var resetGuess = document.querySelectorAll('.input-guess');
var resetGuessButton = document.getElementById('button-reset');

resetGuessButton.addEventListener('click', resetGuessFields);

function resetGuessFields (){
 event.preventDefault();
 for (var i = 0; i < resetGuess.length; i++){
  resetGuess[i].value = '';
  };
};
//end reset button//


//start clear button-fields//

var clearAll = document.querySelectorAll('.all');
var clearAllButton = document.getElementById('button-clear');
var clearInput = document.querySelectorAll('.clear');
var revertName1 = document.querySelectorAll('.rev-name1');
var revertName2 = document.querySelectorAll('.rev-name2');
var revertGuesses = document.querySelectorAll('.rev-guesses');

clearAllButton.addEventListener('click', emptyAllFields);

function emptyAllFields (){
  event.preventDefault();
  for (var i = 0; i < clearInput.length; i++){
   clearInput[i].value = '';
  };
};

clearAllButton.addEventListener('click', challenger1Revert);

function challenger1Revert (){
  event.preventDefault();
  for (var i = 0; i < revertName1.length; i++){
    revertName1[i].innerText = 'Challenger 1';
  };
};

clearAllButton.addEventListener('click', challenger2Revert);
 
function challenger2Revert (){
  event.preventDefault();
  for (var i = 0; i < revertName2.length; i++){
    revertName2[i].innerText = 'Challenger 2';
  };
};

clearAllButton.addEventListener('click', guessesRevert);

function guessesRevert (){
  event.preventDefault();
  for (var i = 0; i < revertGuesses.length; i++){
    revertGuesses[i].innerText = '00';
  };
};

clearAllButton.addEventListener('click', numAfterClick);

function numAfterClick (){
  event.preventDefault();
  generateRandomNumber(minAutomatic, maxAutomatic);
  displayMinNumber.innerText = 1;
  displayMaxNumber.innerText = 100;
  };
  
//end clear button//

//start button enabling//

userMin.addEventListener('keyup', enableUpdate);
userMax.addEventListener('keyup', enableUpdate);
p1name.addEventListener('keyup', enableSRC);
p2name.addEventListener('keyup', enableSRC);
p1guess.addEventListener('keyup', enableSRC);
p2guess.addEventListener('keyup', enableSRC);

function enableUpdate(){
  event.preventDefault();
  document.getElementById('range-button').disabled = false;
};

function enableSRC(){
  event.preventDefault();
  document.getElementById('button-submit').disabled = false;
  document.getElementById('button-reset').disabled = false;
  document.getElementById('button-clear').disabled = false;
};

//end button enabling//



//start current game feedback//
var feedback1Text = document.getElementById('feedback1');
var feedback2Text = document.getElementById('feedback2');


function liveFeedback1(){
  // event.preventDefault();
  if (Number(p1guess.value) === randomNumber){ 
    feedback1Text.innerText = ('Boom!!!');
  } else if (Number(p1guess.value) < randomNumber){ 
    feedback1Text.innerText = ('That is too low!');
  } else {
    feedback1Text.innerText = ('That is too high!');
  }
};


function liveFeedback2(){
  if (Number(p2guess.value) === randomNumber){
    feedback2Text.innerText = ('Boom!!!');
  } else if (Number(p2guess.value) < randomNumber){
    feedback2Text.innerText = ('That is too low!');
  } else {
    feedback2Text.innerText = ('That is too high!');
  }
};


