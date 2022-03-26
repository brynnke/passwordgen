// Assignment code here
var generateBtn = document.querySelector("#generate");

  // various character choices
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var alphaUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var alphaLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
  ];

  // function to prompt the questions for users
  function questions(){
    var isValid = false;
    do {
      var length = prompt("Choose length of password between 8 and 128");
      var asknumbers = confirm("Would you like numbers in your password?");
      var askLowercase = confirm ("Would you like lower case letters in your password?");
      var askspecial = confirm("Would you like special characters in your password?");
      var askUppercase = confirm("Would you like uppercase letters in your password?");

      var responses = {
        length: length,
        asknumbers: asknumbers,
        askLowercase: askLowercase,
        askUppercase: askUppercase,
        askspecial: askspecial,
      }
      if ((length <8) || (length > 128))
      alert("Choose a number between 8 and 128");
      else if((!asknumbers)&&(!askLowercase)&&(!askspecial)&&(!askspecial))
      alert("Must choose at least one");
      else
      isValid = true;

    } 
    while(!isValid);
    return responses;
  }
  // Function to connect answers to generate a strong password.
  function generatePassword() {
    var passwordOptions = questions();
    var possibleCombo = [];
    var finalpassword = "";

    if (passwordOptions.asknumbers) {
      for (var i of numbers)
        possibleCombo.push(i);
    }

    if (passwordOptions.askLowercase) {
      for (var i of alphaLower)
        possibleCombo.push(i);
    }

    if (passwordOptions.askspecial) {
      for (var i of special)
        possibleCombo.push(i);
    }

    if (passwordOptions.askUppercase) {
      for (var i of alphaUpper)
        possibleCombo.push(i);
    }

    console.log(possibleCombo);

    for (var i = 0; i < passwordOptions.length; i++) {
        finalpassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];

    }
    console.log(finalpassword);

    return finalpassword;
  }
  // write password to the #password input
  function writePassword() {
    var password = generatePassword ();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


