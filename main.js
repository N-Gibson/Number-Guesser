

function generateRandomNumber(min,max) {
  var randomNumber = Math.floor(Math.random() * (max - min) + 1);
  console.log(randomNumber);
};

generateRandomNumber (1,100);
