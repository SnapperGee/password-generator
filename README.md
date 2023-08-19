# Password Generator

Generate a string of text with specific requirements/constraints.

## Use

There are 2 properties of the generated string that can be controlled:

1. ***length***

    The length of the string can be set between 8 to 128 characters.

1. ***characters***

    The types of characters the generated string can contain can be constrained to a combination of 4 different types:

    - **uppercase** - uppercase letters 'A' through 'Z'.
    - **lowercase** - lowercase letters 'a' through 'z'.
    - **numeric** - numbers 0 through 9.
    - **symbols** - Non alphanumeric characters.

Once at least one character type is selected, the sting can be generated.

### Known Bugs

- When the page is refreshed, the states of the checkboxes, create button, range scale slider, and options dropdown get
  out of sync until they're interacted with by the user.

### Proposals

- The password criteria card that appears when user clicks "Generate Password" button is redundant. The password
  criteria card should always be visible and it's valid/invalid state can make the "Generate Password" button
  disabled accordingly.

- When no required character types are selected, an error message appears causing the character requirements box to
  reposition itself lower. And then when a character type is selected and the error message disappears, the character
  requirements box repositions itself again. If this reposition didn't occur when the error message appears and
  disappears, that'd improve the UX.
