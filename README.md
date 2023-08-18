# Password Generator

Generate a string of text with specific requirements/constraints.

## Use

There are 2 properties of the generated string that can be controlled:

1. ***length***

    The length of the string can be set between 8 to 128 characters.

1. ***characters***

    The types of characters the generated password can contain can be constrained to a combination of 4 different types:

    - **uppercase** - uppercase letters A through Z characters.
    - **lowercase** - lowercase letters A through Z characters.
    - **numeric** - numbers 0 through 9.
    - **symbols** - Non alphanumeric characters.

Once at least one character type is selected, the sting can be generated.

### Known Bugs

- When testing locally on my machine, certain states of the checkboxes, create button, and the range scale slider and
  options dropdown being synced up.

### Proposals

- The password criteria card that appears when user clicks "Generate Password" button is redundant. The password
  criteria card should always be visible and it's valid/invalid state can make the "Generate Password" button
  disabled accordingly.
