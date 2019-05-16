// variables
var randomNumber;
var minAutomatic = 1;
var maxAutomatic = 100;
var userMin = document.getElementById('lower-range');
var userMax = document.getElementById('upper-range');
var updateButton = document.getElementById('range-button');
var displayMinNumber = document.getElementById('display-min');
var displayMaxNumber = document.getElementById('display-max');
var p1Name = document.getElementById('name-1');
var p2Name = document.getElementById('name-2');
var p1Guess = document.getElementById('guess-1');
var p2Guess = document.getElementById('guess-2');
var submitButton = document.getElementById('button-submit');
var p1Everywhere = document.querySelectorAll('.p1-rename');
var p2Everywhere = document.querySelectorAll('.p2-rename');
var p1GuessEverywhere = document.getElementById('p1-guess-id');
var p2GuessEverywhere = document.getElementById('p2-guess-id');
var resetGuess = document.querySelectorAll('.input-guess');
var resetGuessButton = document.getElementById('button-reset');
var clearAll = document.querySelectorAll('.all');
var clearAllButton = document.getElementById('button-clear');
var clearInput = document.querySelectorAll('.clear');
var revertName1 = document.querySelectorAll('.rev-name1');
var revertName2 = document.querySelectorAll('.rev-name2');
var revertGuesses = document.querySelectorAll('.rev-guesses');
var feedback1Text = document.getElementById('feedback1');
var feedback2Text = document.getElementById('feedback2');
var cards = document.getElementById('card-section');
var alertName1 = document.getElementById('player-1-name-alert');
var alertName2 = document.getElementById('player-2-name-alert');
var p1GuessBorder = document.getElementById('guess-1');
var p2GuessBorder = document.getElementById('guess-2');
var guessTooLow = document.getElementById('player-1-guess-alert');
var guess2Low = document.getElementById('player-2-guess-alert');
//event listeners
updateButton.addEventListener('click', updateEverything);
submitButton.addEventListener('click', submitEverything);
resetGuessButton.addEventListener('click', resetEverything);
clearAllButton.addEventListener('click', clearEverything);
userMin.addEventListener('keyup', enableUpdate);
userMax.addEventListener('keyup', enableUpdate);
p1Name.addEventListener('keyup', enableSRC);
p2Name.addEventListener('keyup', enableSRC);
p1Guess.addEventListener('keyup', enableSRC);
p2Guess.addEventListener('keyup', enableSRC);
//runs all functions on update button event listener
function updateEverything() {
  rangeGenerator();
  minCompareMax();
};

//runs all functions on clear button event listener
function clearEverything() {
  emptyAllFields();
  challenger1Revert();
  challenger2Revert();
  guessesRevert();
  numAfterClick();
};

//runs all functions on submit button event listener
function submitEverything() {
  updateAllNames();
  updateAllGuesses();
  playerOneErrors();
  playerTwoErrors();
  playerOneNameErrors();
  playerTwoNameErrors();
};

//runs all functions on reset button event listener
function resetEverything() {
  resetGuessFields();
};

//generate random number
function generateRandomNumber(min,max) {
  return randomNumber = Math.floor(Math.random() * (max - min) + min);
};
  generateRandomNumber(minAutomatic, maxAutomatic);
  console.log(randomNumber);

//generate random number inside user set range
function rangeGenerator() {
  event.preventDefault();
  displayMinNumber.innerText = userMin.value;
  displayMaxNumber.innerText = userMax.value;
  generateRandomNumber(Number(userMin.value), Number(userMax.value));
  console.log(randomNumber)
};

//error message if min is greater than max
function minCompareMax() {
  event.preventDefault();
  var minError = document.getElementById('min-error');
  if (Number(userMin.value) > (userMax.value)) {
    minError.insertAdjacentHTML('afterbegin', 'Min Range cannot exceed Max Range.')
  } else {
    minError.innerText = '';
  }
};

//all errors for p1 guesses
function playerOneErrors() {
  event.preventDefault();
  if (Number(p1Guess.value) < Number(displayMinNumber.innerText)) {
    guessTooLow.style.visibility = 'visible';
    p1GuessBorder.style = 'border: 2px solid #F74D9B';
  } else if (Number(p1Guess.value) > Number(displayMaxNumber.innerText)) {
    guessTooLow.style.visibility = 'visible';
    p1GuessBorder.style = 'border: 2px solid #F74D9B';
  } else {
    guessTooLow.style.visibility = 'hidden';
    p1GuessBorder.style = 'border: 1px solid #DADBDD';
  }
};

//all errors for p2 guesses
function playerTwoErrors() {
  event.preventDefault();
  if (Number(p2Guess.value) < Number(displayMinNumber.innerText)) {
    guess2Low.style.visibility = 'visible';
    p2GuessBorder.style = 'border: 2px solid #F74D9B';
  } else if (Number(p2Guess.value) > Number(displayMaxNumber.innerText)) {
    guess2Low.style.visibility = 'visible';
    p2GuessBorder.style = 'border: 2px solid #F74D9B';
  } else {
    guess2Low.style.visibility = 'hidden';
    p2GuessBorder.style = 'border: 1px solid #DADBDD';
  }
};

//error on name field p1
function playerOneNameErrors() {
  var name1InputValue = document.getElementById('name-1')
  event.preventDefault();
  if (p1Name.value === '') {
    alertName1.style.visibility = 'visible';
    name1InputValue.style = 'border: 2px solid #F74D9B';
  } else { 
    alertName1.style.visibility = 'hidden';
    name1InputValue.style = 'border: 1px solid #DADBDD';
  }
};

//error on name field p2
function playerTwoNameErrors() {
  var name2InputValue = document.getElementById('name-2')
  event.preventDefault();
  if (p2Name.value === '') {
    alertName2.style.visibility = 'visible';
    name2InputValue.style = 'border: 2px solid #F74D9B';
  } else {
    alertName2.style.visibility = 'hidden';
    name2InputValue.style = 'border: 1px solid #DADBDD';
  }
};

//update p1 and p2 names everywhere
function updateAllNames() {
  event.preventDefault();
  for (var i = 0; i < p1Everywhere.length; i++){
    p1Everywhere[i].innerText = p1Name.value;
  };
  for (var i = 0; i < p2Everywhere.length; i++){
    p2Everywhere[i].innerText = p2Name.value;
  }
};

//update guess
function updateAllGuesses() {
  event.preventDefault();
  p1GuessEverywhere.innerText = p1Guess.value;
  p2GuessEverywhere.innerText = p2Guess.value;
  liveFeedback1();
  liveFeedback2();
}; 

//reset guess fields using reset button with new random number
function resetGuessFields() {
  event.preventDefault();
  for (var i = 0; i < resetGuess.length; i++){
  resetGuess[i].value = ''
};
  generateRandomNumber(Number(displayMinNumber.innerText), Number(displayMaxNumber.innerText));
  console.log(randomNumber);
};

//empty all fields using clear button
function emptyAllFields() {
  event.preventDefault();
  for (var i = 0; i < clearInput.length; i++){
   clearInput[i].value = '';
  }
};

//populates player 1 names with default value
function challenger1Revert() {
  event.preventDefault();
  for (var i = 0; i < revertName1.length; i++){
    revertName1[i].innerText = 'Challenger 1';
  }
};

//populates player 2 names with default value
function challenger2Revert() {
  event.preventDefault();
  for (var i = 0; i < revertName2.length; i++){
    revertName2[i].innerText = 'Challenger 2';
  }
};

//changes latest score cards to 00 when no last guess was made
function guessesRevert() {
  event.preventDefault();
  for (var i = 0; i < revertGuesses.length; i++){
    revertGuesses[i].innerText = '00';
  }
};

//creates a random number based on default values
function numAfterClick() {
  event.preventDefault();
  generateRandomNumber(minAutomatic, maxAutomatic);
  displayMinNumber.innerText = 1;
  displayMaxNumber.innerText = 100;
};

//enables update button
function enableUpdate() {
  event.preventDefault();
  document.getElementById('range-button').disabled = false;
  buttonToggleUpdate();
};

//enables other three buttons 
function enableSRC() {
  document.getElementById('button-submit').disabled = false;
  document.getElementById('button-reset').disabled = false;
  document.getElementById('button-clear').disabled = false;
  buttonToggle();
};

//disables button when strings are empty
function buttonToggle() {
  if (p1Name.value === '' && p2Name.value === '' && p1Guess.value === '' && p2Guess.value === ''){
  document.getElementById('button-submit').disabled = true;
  document.getElementById('button-reset').disabled = true;
  document.getElementById('button-clear').disabled = true;
  }
};

//disables update string when inouts are empty
function buttonToggleUpdate() {
  if (userMin.value === '' && userMax.value === '')
  document.getElementById('range-button').disabled = true;
};

//populates cards on right with player 1 inputs
function liveFeedback1() {
  if (Number(p1Guess.value) > randomNumber){ 
    feedback1Text.innerText = ('that is too high');
  } else if (Number(p1Guess.value) < randomNumber){ 
    feedback1Text.innerText = ('that is too low');
  } else { 
    feedback1Text.innerText = ('Boom!!!');
    cards.insertAdjacentHTML('afterbegin', `<article class= "cards"> <div class="winner-card-header">
          <p class="challenger-1-name"> ${p1Name.value} </p> 
          <p class="vs"> vs </p>
          <p class="challenger-2-name"> ${p2Name.value} </p>
        </div>
        <h2 class="winner-name"> ${p1Name.value} </h2>
        <h2 class="winner-ticket"> WINNER </h2>
        <div class="winner-card-footer">
          <p class="feedback"> <span class="span-feedback"> 47</span> GUESSES </p>
          <p class="feedback"> <span class="span-feedback"> 1.35 </span> MINUTES </p>
          <button class="close-button"> x </button>
        </div> </article>`);
  }
};

//populates card on right with player 2 inputs
function liveFeedback2() {
  if (Number(p2Guess.value) > randomNumber){
    feedback2Text.innerText = ('that is too high');
  } else if (Number(p2Guess.value) < randomNumber){
    feedback2Text.innerText = ('that is too low');
  } else {
    feedback2Text.innerText = ('Boom!!!');
    cards.insertAdjacentHTML('afterbegin', `<article class= "cards"> <div class="winner-card-header">
          <p class="challenger-1-name"> ${p1Name.value} </p> 
          <p class="vs"> vs </p>
          <p class="challenger-2-name"> ${p2Name.value} </p>
        </div>
        <h2 class="winner-name"> ${p2Name.value} </h2>
        <h2 class="winner-ticket"> WINNER </h2>
        <div class="winner-card-footer">
          <p class="feedback"> <span class="span-feedback"> 47</span> GUESSES </p>
          <p class="feedback"> <span class="span-feedback"> 1.35 </span> MINUTES </p>
          <button class="close-button"> x </button>
        </div> </article>`);
  }
};