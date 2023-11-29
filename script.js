// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Creating the password generating function
function generatePassword() {
  //Prompt for password criteria
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");

  //Checking if the length is within requirements
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a valid password length.");
    return;
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  //Checking that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChars) {
    alert("Please select at least one character type.");
    return;
  }

  //Generating the password
  var password = generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecialChars);

  return password;
}
//Checking if password meets the requirements 
function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecialChars) {
  var charset = "";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?/";

  if (includeLowercase) {
    charset += lowercaseChars;
  }

  if (includeUppercase) {
    charset += uppercaseChars;
  }

  if (includeNumeric) {
    charset += numericChars;
  }

  if (includeSpecialChars) {
    charset += specialChars;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}