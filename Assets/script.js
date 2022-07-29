// Assignment Code


//The password Generator
var generatePassword = function () {

  //Inital How many Charcters prompt
  var characterInput = window.prompt('How many characters do you want you password to be? Choose between 8 - 128 charcters');
  var passwordCharacters = parseInt(characterInput);

  while (true) {
    if (isNaN(passwordCharacters)) {
      window.alert("Not a valid number, try again!");
      generatePassword();
    } else if (passwordCharacters < 8 || passwordCharacters > 128) {
      window.alert("Please choose a valid number of characters between 8 - 128.");
      generatePassword();
    } else {
      alert("Your password will now be " + passwordCharacters + " characters!");
      break;
    }
  }

 var confirmChars = {
  lowercase: "",
  uppercase: "",
  numbers: "",
  specialCharacters: ""
}

  // Confirmation prompts for characters 
  var confirmLowercase = window.confirm("Would you like your password to contain lowercase characters ?");
  var confirmUppercase = window.confirm("Would you like your password to contain uppercase characters ?");
  var confirmNum = window.confirm("Would you like your password to contain numbers ?");
  var confirmSpecialCharcaters = window.confirm("Would you like your password to contain special characters ?");
  var numericValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var userOptions = [];

  if (!confirmLowercase && !confirmUppercase && !confirmNum && !confirmSpecialCharcaters) {
    window.alert(" Please choose at least one character!");
    generatePassword();
  }



  //Lowercase Characters array, a-z 
  var generateLowercase = function () {
    return [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

  }
  // console.log(generateLowercase());

  //Uppercase Characters array, A-A 
  var generateUppercase = function () {
    return [...Array(26)].map((_, i) => String.fromCharCode(i + 65));

  }
  // console.log(generateUppercase());


  //Special Characters array 
  var specialChars = function () {
    return [...Array(15)].map((_, i) => String.fromCharCode(i + (33)));

  }
    // console.log(specialChars());
  



  

  // Confirm that newPassword returns at least one of the value you from the array if all options are selected 

  if (confirmLowercase && confirmUppercase && confirmNum && confirmSpecialCharcaters) {
    userOptions.push(generateLowercase(), generateUppercase(), numericValues, specialChars());
  }
   else if (confirmLowercase && confirmUppercase && confirmNum){
  userOptions.push(generateLowercase(), generateUppercase(), numericValues);
} 
  else if (confirmLowercase && confirmUppercase && confirmSpecialCharcaters) {
    userOptions.push(generateLowercase(), generateUppercase(), specialChars());
  } 
  else if (confirmUppercase && confirmNum && confirmSpecialCharcaters) {
    userOptions.push(generateUppercase(), numericValues, specialChars());
  }
  else if (confirmLowercase && confirmUppercase ) {
    userOptions.push(generateLowercase(),generateUppercase());
  }
   else if (confirmLowercase && confirmNum) {
    userOptions.push(generateLowercase(), numericValues);
   }
   else if (confirmLowercase && confirmSpecialCharcaters) {
    userOptions.push(generateLowercase(), specialChars());
   }
   else if (confirmUppercase && confirmNum) {
    userOptions.push(generateUppercase(), numericValues);
   } 
   else if (confirmUppercase && confirmSpecialCharcaters) {
    userOptions.push(generateUppercase(), specialChars());
   } 
   else if (confirmSpecialCharcaters && confirmNum) {
    userOptions.push(specialChars(), numericValues);
   } 
   // putting the characters together to form the password 
  else if (confirmLowercase) {
    userOptions.push(generateLowercase());
  }

  else if (confirmUppercase ) {
    userOptions.push(generateUppercase());
  }

  else if (confirmNum) {
    userOptions.push(numericValues);
  }

  else if (confirmSpecialCharcaters) {
    userOptions.push(specialChars());
  }






console.log(userOptions);

  // Randomize the characters and integers 
  var newPassword = ""; 
  for (i = 0; i < passwordCharacters; i++) {
    var randomNum = Math.floor(Math.random() * userOptions.length);
    console.log(randomNum);
    var randomArr = userOptions[randomNum];
    console.log(randomArr);
    randomNum = Math.floor(Math.random() * randomArr.length);

    newPassword += randomArr[randomNum];
  }

console.log(newPassword);




return newPassword;


  
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}







var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// passwordGenerator();
