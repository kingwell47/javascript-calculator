# JavaScript Calculator

## FreeCodeCamp.org - Front End Development Libraries Project

This is a solution to the [Build a JavaScript Calculator project](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-javascript-calculator).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- At any time, pressing the `clear` button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of `display`.
- In any order, users should be able to add, subtract, multiply and divide a chain of numbers of any length, and when they hit `=`, the correct result should be shown in the element with the id of `display`.
- Users should be able to perform any operation (+, -, \*, /) on numbers containing decimal points.
- When the decimal element is clicked, a `.` should append to the currently displayed value; two `.` in one number should not be accepted.
- If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (`-`) sign). For example, if `5 + * 7 =` is entered, the result should be `35` (i.e. `5 * 7`); if `5 * - 5 =` is entered, the result should be `-25` (i.e. `5 * (-5)`).
- Pressing an operator immediately following `=` should start a new calculation that operates on the result of the previous evaluation.

Additional things I did:

- The calculator is designed to resemble a keyboard keypad.
- Users can enter numbers using their keyboard keypad.

### Screenshot

![](./Screenshot.png)

### Links

- Live Site URL: https://kingwell47.github.io/javascript-calculator/

## My process

### Built with

- Semantic HTML
- React.js
- Scss

### What I learned

Programming a calculator is hard!

Also, gradients are cool:

```css
.display-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background: linear-gradient(#2396bf, #0d5b77 40%, #004961 3%, #004961);
  padding: 0.5rem 0.5rem 0 0.5rem;
  margin-bottom: 1rem;
  word-wrap: break-word;
  word-break: break-all;
  box-shadow: inset 0px 0px 0px 4px rgba(229, 229, 229, 0.09);
  border-radius: fnc.rem(5);
}
```

Handling Negative numbers / the Minus sign is particularly tricky:

```js
const handleOperator = (ops) => {
  if (ops === "-" && operand2 === INIT) {
    getOperand(ops);
    return;
  }
  if (ops !== "-" && operand2 === "-") {
    setOperand2(INIT);
  }
  if (operator !== undefined) {
    setOperator(ops);
  }
  if (operand2 === INIT || operand2 === "-") return;
  if (operand1 !== INIT) {
    calculate();
  }
  setOperator(ops);
  if (total.current === 0) {
    setOperand1(operand2);
  } else {
    setOperand1(total.current);
  }
  setOperand2(INIT);
};
```

### Continued development

The calculator does not correctly display numbers that are too long.

I probably need to adjust the getDisplayNumber function from the Web Dev Simplified's code.

### Useful resources

- [Web Dev Simplified's JavaScript Calculator](https://github.com/WebDevSimplified/Vanilla-JavaScript-Calculator/blob/master/script.js) - What I based my code on. I still needed to adjust it for use in React and also to pass all tests.
- [Glass effect with linear gradient](https://stackoverflow.com/questions/62183705/glass-effect-with-linear-gradient) - For the gradient display.
- [CSSgradient.io](https://cssgradient.io/gradient-backgrounds/) - Great resource for gradients.
- [UIGradients.com/](https://uigradients.com/) - Another great resource for gradients.

## Author

- Website - [Joel P. Doctor](https://joeldoctor.com/)
- Frontend Mentor - [@kingwell47](https://www.frontendmentor.io/profile/kingwell47)
- Twitter - [@kingwell47](https://www.twitter.com/kingwell47)
- LinkedIn - [Joel P. Doctor](https://www.linkedin.com/in/joel-d-05854919/)

## Acknowledgments

Thanks to Ms. Jessica Chan (Coder Coder) and all the other YouTube creators making their knowledge available!
