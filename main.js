function generateRandomNumber(min,max) {
  var randomNumber = Math.floor(Math.random() * (max - min) + min);
  console.log(randomNumber);
};

generateRandomNumber (1,100);




var userMin = document.getElementById('lower-range');
var userMax = document.getElementById('upper-range');
var updateButton = document.getElementById('range-button');
var displayMinNumber = document.getElementById('display-min');
var displayMaxNumber = document.getElementById('display-max');

updateButton.addEventListener('click', function (){
  event.preventDefault();
  displayMinNumber.innerText = userMin.value;
  displayMaxNumber.innerText = userMax.value;
  generateRandomNumber(Number(userMin.value),Number(userMax.value));
});
