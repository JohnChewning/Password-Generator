// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "0123456789"
  var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var multiSelect = [];
  var randomIndex = [];

  var uppercaseABC = confirm("Do you want to include Uppercase letters in your password?");
    var lowercaseABC = confirm("Do you want to include Lowercase letters in your password?");
    var numbers123 = confirm("Do you want to include Numbers in your password?");
    var specialCharacters = confirm("Do you want to include Special Characters in your password?");

  var passwordLength = prompt("Your password must be between 8 to 128 characters.");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Try Again. Password must be between 8 and 128 characters.");
    return;

  }

  if (uppercaseABC) { multiSelect += uppercase; }
  if (lowercaseABC) { multiSelect += lowercase; }
  if (numbers123) { multiSelect += numbers; }
  if (specialCharacters) { multiSelect += symbols; }

  for (i = 0; i < passwordLength; i++) {

    randomIndex += multiSelect[Math.floor(Math.random() * multiSelect.length)]
  }
  return (randomIndex);
}

var passwordText = document.querySelector("#password");

function writePassword(randomIndex) {
  passwordText.value = randomIndex;
}

generateBtn.addEventListener("click", function () { writePassword(generatePassword()) });


