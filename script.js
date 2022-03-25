// Assignment code here
var generateBtn = document.querySelector("#generate");

  // various character choices
  var numbers =  [1,2,3,4,5,6,7,8,,9];
  var special = ["!" , "@" ,"#" , "$" , "%" , "^" , "/" ,"?"];
  var alphaLower = ["a", "b", "c", "d", "e", "f", "g" , "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"];
  var alphaUpper = ["A" ,"B" ,"C" ,"D" ,"E" ,"F" ,"G" ,"H" ,"I" ,"J" ,"K" ,"L" ,"M" ,"N" ,"O" ,"P" ,"Q" ,"R" ,"S" ,"T" ,"U" ,"V" ,"W" ,"X" ,"Y" ,"Z"];
  
  // declerations
  var confirmLength = "";
  var confirmNumericCharacter;
  var confirmSpecialChar;
  var confirmUppercase;
  var confirmLowercase;

  // permaters of password
  var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric values");
  var confirmSpecialChar = confirm("Clike OK to confirm if you would like to include special characters");
  var confirmUppercase = confirm("Click OK to confirm if you would like to include uppercase letters");
  var confirmLowercase = confirm("Click OK to confirm if you would like to include lowercase letters in your password");
    // Loop if outside parameters
    while(confirmNumericCharacter === false && confirmSpecialChar === false && confirmUppercase === false && confirmLowercase === false ){
      alert("Must chose at lease one parameter");
      var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric values");
      var confirmSpecialChar = confirm("Click OK to confirm if you would like to include special characters");
      var confirmUppercase = confirm("Click OK to confirm if you would like to inlcude uppercase letters");
      var confirmLowercase = confirm("Click OK to confirm if you would like to include lowercase letters");
    }
  // Loop if answer is outside the parameters
  while(confirmLength <= 8 || confirmLength >128){
    alert("Password lenght must be between 8-128 characters Try agian");
    var confirmLength = (prompt("How many character would you like your password to have in your password?"));
  }
  // tell user how mnay characters the password will have 
  alert ('Your password will have ${confrimLength} characters');
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

