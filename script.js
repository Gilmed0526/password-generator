//DEFINE VARIABLES
var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$%*&()+=-[]{}?<>.';
var numbers = '123456789';
var generateBtn = document.querySelector("#generate");
var pwd = '';
var lowerSelection = false;
var upperSelection = false;
var specialSelection = false;
var numberSelection = false;

//FUNCTION TO GENERATE RANDOM PASSWORD
function generatePassword() {
  var confirmLength = '';
  //ASKING USER TO INPUT DESIRED CHARACTER LENGTH
  while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {

    confirmLength = prompt("What length would you like your password to be? (Choose between  8 and 128 chacaters)");
    if (confirmLength === null) {

      break;
    }
  }
  //GETTING USER INPUT FOR WHICH CHARACTER TYPES TO USE FOR THE PASSWORD
  if (confirmLength) {

    if (confirm("Would you like to use lowercase characters?") == true) {
      lowerSelection = true
    }
    if (confirm("Would you like to use uppercase characters?") == true) {
      upperSelection = true
    }

    if (confirm("Would you like to use special characters?") == true) {
      specialSelection = true
    }
    if (confirm("Would you like to use numerical characters?") == true) {
      numberSelection = true
    }
    //IF NONE OF THE CHARACTERS TYPES ARE SELECTED ALERTS THE USER TO CHOOSE ONE
    if (lowerSelection === false && upperSelection === false && specialSelection === false && numberSelection === false) {
      alert("At least one character type must be selected")
    }
  }
  //GENERATES RANDOM PASSWORD
  var characters = '';
  characters += (lowerSelection ? lower : '');
  characters += (upperSelection ? upper : '');
  characters += (specialSelection ? special : '');
  characters += (numberSelection ? numbers : '');


  document.getElementById("password").innerHTML = pwd;

  pwd = password(confirmLength, characters);
  console.log('pwd', pwd);

  //
  function password() {
    // var pwd = '';
    for (var i = 0; i < confirmLength; i++) {
      pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
  };
  return pwd;
};


generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
console.log('password', password);
  passwordText.value = password;

};
