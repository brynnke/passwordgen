//Steps
// 1. declare
// 2. give a name for reference
// 3. Make it equal to a Datatype value
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var password = "word contatining";
var word = document.getElementById
var generatePassword = (characterAmount, includeUppercase, includeNumber, includeSymbol)
// Special Characters
character= ["!" , "#" , "$" , "@" , "%" ];
// Numeric character
number = [1,2,3,4,5,6,7,8,,9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g" , "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"];

// Space is for the uppercase
space = [];

// choices delcared outside if statement
var choices;

// Assignment code here

//wrong info function
window.alert("your password must have a @ and a upercase letter")
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const LOWERCASE_CHar_Codes

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
function generatePassword () {
  // Ask for input
  enter = window.alert(prompt("How many characters do you want in your password? Choose from " ))
}
if (!enter){
  alert("This needs a value");
} else if (enter <8 || enter > 12 ){
  // validate input
  // start input prompts
  enter = parseInt(prompt("Choose between 8 and 12"));

} else {
  // continue once input is validated
  confirmNumber = confirm("Will this contain numbers?");
  confirmCharacter = confirm("Will this contain special characters?");
  confirmUppercase = confirm("Will this contain Uppercase letters?");
  confirmLowercase = confirm("Will this contain Lowercase letters?");
   
};
// Else if for negative options
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("You must choose a criteria!");
}
else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = character.concat(number, )
}

  passwordText.value = password;
  writePassword

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
element.addEventListener("click", generatePassword);
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About