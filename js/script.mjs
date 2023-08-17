import { selectNumberOptionRange } from "./select-number-option-range.mjs";

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
    // NOTE!: Make sure name matches html label for attribute
    const pwdLengthOptionSelector = selectNumberOptionRange({name: "pwd-length-dropdown", minRange: 8, maxRange: 128});
    document.getElementById("pwd-length-dropdown-label")?.append(pwdLengthOptionSelector);

    const pwdLengthRangeSlider = document.getElementById("pwd-length-slider");

    pwdLengthRangeSlider?.addEventListener("input", () =>
    {
        pwdLengthOptionSelector.value = pwdLengthRangeSlider.value;
    });

    if (pwdLengthRangeSlider !== null)
    {
        pwdLengthOptionSelector?.addEventListener("change", () =>
        {
            pwdLengthRangeSlider.value = pwdLengthOptionSelector.value;
        });
    }
}
