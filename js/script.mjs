import { selectWithOptionNumberRange } from "./password-length-criteria.mjs";

// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

window.onload = () =>
{
    const selectOptionRange = selectWithOptionNumberRange({name: "pwd-length", minRange: 8, maxRange: 128});
    document.getElementById("pwd-length-dropdown-label")?.append(selectOptionRange);
}
