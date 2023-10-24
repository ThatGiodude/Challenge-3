// Assignment Code
var generateBtn = document.querySelector("#generate");
var SpecialCharacters = "!@#$%^&*()";
var UpperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LowerCases = "abcdefghijklmnopqrstuvwxyz";
var Numbers = "1234567890";
// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var numbers = confirm("Do you want numbers in your password?");
  var lowercases = confirm("Do you want your password to contain lower cases?");
  var uppercases = confirm("Do you want your password to contain Upper Cases?");
  var specialcharacters = prompt("How many special characters do you want to use?");
  var passwordLength = prompt("How long do you want your password to be?");

  var minimumCount = 0;
  var minimumSpecialCharacters = "";
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  

  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() *10 + 48));
  
    },
    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() *26 + 97));
    },
    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() *26 + 65));
    },
    getSpecialCharacters: function() {
      return SpecialCharacters[Math.floor(Math.random()* SpecialCharacters.length)]
    }
  }

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++
  }
  
  if (uppercases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;
  }

  if (lowercases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;
  }

  if (specialcharacters === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;
  }

  var randomPasswordGenerated = "";
    for (let i =0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
    randomPasswordGenerated += randomNumberPicked;
  }

  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;
  console.log(randomPasswordGenerated)
  passwordText.value = randomPasswordGenerated
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
