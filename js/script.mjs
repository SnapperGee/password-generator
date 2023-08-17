import { selectNumberOptionRange } from "./select-number-option-range.mjs";

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



const pwdLengthOptionSelector = selectNumberOptionRange({name: "pwd-length-dropdown", minRange: 8, maxRange: 128});
const pwdLengthRangeSlider = document.getElementById("pwd-length-slider");

const checkBoxRequiredErrMsg = document.getElementById("char-type-require-no-selection-msg");
const createBtn = document.getElementById("create-btn");
const cancelBtn = document.getElementById("cancel-btn");
const pwdCriteriaCard = document.getElementById("pwd-criteria-card");
const generateBtn = document.getElementById("generate");

// Clicking Generate button makes password criteria card visible and hies Generate button.
generateBtn?.addEventListener("click", () => {
    if (pwdCriteriaCard !== null)
    {
        generateBtn.style.display = "none";
        pwdCriteriaCard.style.display = "block";
    }
});

// Clicking Create buttons when it's not disabled, hides password criteria card,
// makes generate button visible, and inserts generated text into text box
createBtn?.addEventListener("click", () => {
    // @ts-ignore
    if (generateBtn !== null && pwdCriteriaCard !== null && createBtn.disabled !== true)
    {
        pwdCriteriaCard.style.display = "none";
        generateBtn.style.display = "inline";
    }
});

// Clicking password criteria card Cancel button hides card and makes Generate button visible
cancelBtn?.addEventListener("click", () => {
    // @ts-ignore
    if (generateBtn !== null && pwdCriteriaCard !== null)
    {
        pwdCriteriaCard.style.display = "none";
        generateBtn.style.display = "inline";
    }
});

// Update password length dropdown with slider range value.
pwdLengthRangeSlider?.addEventListener("input", () =>
{
    // @ts-ignore
    pwdLengthOptionSelector.value = pwdLengthRangeSlider.value;
});

// Update slider range with password length dropdown value.
if (pwdLengthRangeSlider !== null)
{
    pwdLengthOptionSelector?.addEventListener("change", () =>
    {
        // @ts-ignore
        pwdLengthRangeSlider.value = pwdLengthOptionSelector.value;
    });
}

const checkBoxes = Object.freeze(Array.from(document.getElementsByTagName("input")).filter(input => input.type === "checkbox"));
const checkBoxStatusMap = new Map(checkBoxes.map(checkBox => [checkBox, checkBox.checked]));

for (const checkBox of checkBoxes)
    {
        checkBox.addEventListener("change", () => {
            checkBoxStatusMap.set(checkBox, checkBox.checked);

            if (checkBoxRequiredErrMsg !== null)
            {
                // If no required character types selected
                if (Array.from(checkBoxStatusMap.values()).every(status => status === false))
                {
                    checkBoxRequiredErrMsg.style.display = "inline-block";

                    if (createBtn !== null)
                    {
                        // @ts-ignore
                        createBtn.disabled = true;
                    }
                }
                else
                {
                    checkBoxRequiredErrMsg.style.display = "none";

                    if (createBtn !== null)
                    {
                        // @ts-ignore
                        createBtn.disabled = false;
                    }
                }
            }
        })
    }

window.onload = () =>
{
    // Generate number range option dropdown and add it to pre-existing label
    // for it in password criteria card
    document.getElementById("pwd-length-dropdown-label")?.append(pwdLengthOptionSelector);
}
