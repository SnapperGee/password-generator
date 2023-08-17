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
const checkBoxStatus = checkBoxes.map(checkBox => checkBox.checked);
const checkBoxRequiredErrMsg = document.getElementById("char-type-require-no-selection-msg");
const createBtn = document.getElementById("create-btn");

for (const checkBoxIndex in checkBoxes)
    {
        const checkBox = checkBoxes[checkBoxIndex];
        checkBox.addEventListener("change", () => {
            checkBoxStatus[checkBoxIndex] = checkBox.checked;

            if (checkBoxRequiredErrMsg !== null)
            {
                // If no required character types selected
                if (checkBoxStatus.every(status => status === false))
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
