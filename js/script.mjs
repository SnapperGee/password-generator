import { createLabel, selectWithOptionNumberRange } from "./password-length-criteria.mjs";

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
    const pwdLengthLabel = createLabel({labelText: "Length:  ", forAttr: "pwd-length"})
    const selectOptionRange = selectWithOptionNumberRange({name: "pwd-length", minRange: 8, maxRange: 128});
    pwdLengthLabel.append(selectOptionRange);
    const pwdCriteriaForm = document.getElementById("pwd-criteria");

    pwdCriteriaForm?.insertBefore(pwdLengthLabel, pwdCriteriaForm.firstChild);
}
