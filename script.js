// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = [];
var lowerArray = ['a,','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArray = ['1','2','3','4','5','6','7','8','9'];
var specialArray= ['~','@','#','$','%','^','&','*','()','_'];
var passwordArray= [];

// Write password to the #password input
function writePassword() {
  var characters = [];
  var passwordArray = [];
  var passlength = parseInt(window.prompt('Select expect length (5-120):'));

 
  isNaN(passlength) ? alert ('Enter a number'): '';
  isNaN(passlength) ? end: '';

  (passlength > 120|| passlength <5) ? alert('Select a value between 5 and 120') :'';
  (passlength > 120|| passlength<5) ? end: '';

  var uppercaseChoice = window.confirm('Uppercase characters?');
  if (uppercaseChoice) {
    characters=characters.concat(upperArray)
  };

  var lowercaseChoice = window.confirm('Lowercase characters?');
  if (lowercaseChoice) {
    characters=characters.concat(lowerArray)
  };


  var numbercaseChoice = window.confirm('With number?');
  if (numbercaseChoice) {
    characters=characters.concat(numberArray)
  };

  
  var specialcaseChoice = window.confirm('Special characters?');
  if (specialcaseChoice){
    characters=characters.concat(specialArray)
  };
  
  if (!uppercaseChoice && !lowercaseChoice && !numberChoice && !specialChoice){
    alert('Error, you have not selected character')
  };


  for (let i = 0; i < passlength; i++) {
      var randInt = Math.floor(Math.random()
      * ((characters.length) - 1)) + 1;
      passwordArray.push(characters[randInt]);
    }


password = passwordArray.join('')
var passwordText = document.querySelector ("#password");
passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
