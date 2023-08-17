# Password Generator

Generate a password with specific requirements/constraints.

## Bugs

- When testing on my machine, the password criteria checkboxes and disabled state of the "Create" button would be out of
  sync. The disabled state of the "Create" button only gets toggled when a checkbox status is changed.

## Proposals

- The password criteria card that appears when user clicks "Generate Password" button is redundant. The password
  criteria card should always be visible and it's valid/invalid state can make the "Generate Password" button
  disabled accordingly.
