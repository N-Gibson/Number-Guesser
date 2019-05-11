function generateRandomNumber(min,max) {
  var randomNumber = Math.floor(Math.random() * (max - min) + min);
  console.log(randomNumber);
};

var minAutomatic = 1;
var maxAutomatic = 100;

generateRandomNumber (minAutomatic, maxAutomatic);

//end random number generator//

//start set range//

var userMin = document.getElementById('lower-range');
var userMax = document.getElementById('upper-range');
var updateButton = document.getElementById('range-button');
var displayMinNumber = document.getElementById('display-min');
var displayMaxNumber = document.getElementById('display-max');

updateButton.addEventListener('click', rangeGenerator);

function rangeGenerator (){
  event.preventDefault();
  displayMinNumber.innerText = userMin.value;
  displayMaxNumber.innerText = userMax.value;
  generateRandomNumber (Number(userMin.value), Number(userMax.value));
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

submitButton.addEventListener('click', compareGuesses);

function compareGuesses (){
  event.preventDefault();
  // p1Everywhere = [];
  for (var i = 0; i < p1Everywhere.length; i++){
    p1Everywhere[i].innerText = p1name.value;
  };
  // p2Everywhere = [];
  for (var i = 0; i <p2Everywhere.length; i++){
    p2Everywhere[i].innerText = p2name.value;
  };
};


