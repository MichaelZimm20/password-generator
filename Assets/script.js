// Assignment Code
// Object for confirming of Lowercase, Uppercase, Numbers, Special characters
// // Numeric Values array for password 0-9





//The password Generator
var generatePassword = function() {

  //Inital How many Charcters prompt
  var passwordLength = window.prompt('How many characters do you want you password to be? Choose between 8 - 128 charcters');
  
  while (true) {
    if (isNaN(passwordLength)) {
      window.alert("Not a valid number, try again!");
      generatePassword();
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Please choose a valid number of characters between 8 - 128.");  
      generatePassword();
    } else {
      break;
    }
  }
  
 

// Confirmation prompts for characters 
  var confirmLowercase = window.confirm("Would you like your password to contain lowercase characters ?");
  var confirmUppercase = window.confirm("Would you like your password to contain uppercase characters ?");
  var confirmNum = window.confirm("Would you like your password to contain numbers ?");
  var confirmSpecialCharcaters  = window.confirm("world you like your password to contain special characters ?");
  var numericValues = ['0', '1', '2', '3', '4','5','6','7','8','9'];
  var userOptions = [];

  if (!confirmLowercase && !confirmUppercase && !confirmNum && !confirmSpecialCharcaters){
    window.alert(" Please choose at least one character!");
    generatePassword();
   }


  //Lowercase Characters array, a-z 
var generateLowercase = function() { 
  return [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
  
  }
  // console.log(generateLowercase());
  
  //Uppercase Characters array, A-A 
  var generateUppercase = function() { 
    return [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
    
    }
    // console.log(generateUppercase());
  
  
  //Special Characters array 
  var specialChars = function() { 
    return [...Array(15)].map((_, i) => String.fromCharCode(i + (33)));
    
    }
    // console.log(specialChars());
  

// putting the characters togther to form the password 
if (confirmLowercase === true) {
  userOptions.push(generateLowercase());
}

if (confirmUppercase === true) {
  userOptions.push(generateUppercase());
}

if (confirmNum === true) {
  userOptions.push(numericValues);
}

if (confirmSpecialCharcaters === true) {
  userOptions.push(specialChars());
}


// Randomize the characters 
for (i = 0; i < passwordLength; i++) {

}



  
  // } else if (confirmLowercase && confirmUppercase && confirmNum && confirmSpecialCharcaters) {
  //       userOptions = userOptions.concat(generateLowercase(), generateUppercase(), numericValues, specialChars());
  // }
  
  
//for loop for random character

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
