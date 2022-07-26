// Assignment Code


// Numeric Values array for password 0-9
var numericValues = ['0', '1', '2', '3', '4','5','6','7','8','9'];


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


//The password Generator
var passwordGenerator = function() {

  //Inital How many Charcters prompt
  var charPrompt = window.prompt('How many characters do you want you password to be? Choose between 8 - 128 charcters');

  if (!charPrompt || charPrompt < 8 || charPrompt > 128){
      window.alert("Please choose a valid number between 8 - 128.")

  } else {
    window.alert('Your password will now be '+ charPrompt + " characters long.");
  }
  console.log(charPrompt);




}
7



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}







var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


passwordGenerator();
