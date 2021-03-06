
//  Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = ["@", "#", "$", "%", "^", "&", "*", "(", ")","!","-","_","=","+","/","?",">","<",":","`","~","|"];
var numberCharacter = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerCasesCharacter = ["a", "b", "c", "d", "e" , "f" , "g" , "h", "i", "j", "k" ,"l", "m", "n", "o" , "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCasesCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U","V","W","X", "Y", "Z"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if(password){
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 // Prompts that come up after you click generate password

function getPasswordOptions() {
  var passwordLength = parseInt(prompt("Please enter the length of your new password.  It must between 8 but less than 128." ));
  // Length condtions
  if (passwordLength < 8 || passwordLength > 128) {

    alert("Please select number between 8 - 128");
    return;
  } 
  // Check if the user input is Number or Letter 
  if (isNaN(passwordLength)) {
    alert("Please select Number ");
    return;
  }

  var numbers = confirm("Do you want numbers in your password?");
  var lowerCases = confirm("Do you want lowercases in your password?");
  var upperCases = confirm("Do you want uppercases in your password?");
  var special = confirm("Do you want special characters in your password?");

  var passwordChoic = {
    length: passwordLength,
    upper: upperCases,
    lower: lowerCases,
    numbers: numbers,
    special: special,
  };

  return passwordChoic;
}

function randomIndex(array) {
  var index = Math.floor(Math.random() * array.length);
  var element = array[index];
  return element;
}

function generatePassword() {
  var options = getPasswordOptions();
  var savePasswerd = [];
  var possibleChars = [];
  var definitiveChars = [];
  if (!options){
    return;
  }

  // check for special Caracters
  if (options.special) {
    possibleChars = possibleChars.concat(specialCharacters);
    definitiveChars.push(randomIndex(specialCharacters));
  }
  // check for UpperCaes Caracters
  if (options.upper) {
    possibleChars = possibleChars.concat(upperCasesCharacter);
    definitiveChars.push(randomIndex(upperCasesCharacter));
  }
  // check for LowerCaes Caracters
  if (options.lower) {
    possibleChars = possibleChars.concat(lowerCasesCharacter);
    definitiveChars.push(randomIndex(lowerCasesCharacter));
  }
  // check for Number
  if (options.numbers) {
    possibleChars = possibleChars.concat(numberCharacter);
    definitiveChars.push(randomIndex(numberCharacter));
  }

  for (var i = 0; i < options.length; i++) {
    var tempChar = randomIndex(possibleChars);
    savePasswerd.push(tempChar);
  }
  for (var i = 0; i < definitiveChars.length; i++) {
    savePasswerd[i] = definitiveChars[i];
  }

   return savePasswerd.join("")
}