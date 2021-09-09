import React from "react";

const buttonObj = [
  {
    btnId: "clear",
    style: "button",
    text: "AC",
    type: "clear",
  },
  {
    btnId: "divide",
    style: "button",
    text: "÷",
    type: "operator",
  },
  {
    btnId: "multiply",
    style: "button",
    text: "x",
    type: "operator",
  },
  {
    btnId: "subtract",
    style: "button",
    text: "-",
    type: "operator",
  },
  {
    btnId: "seven",
    style: "button",
    text: "7",
    type: "digit",
  },
  {
    btnId: "eight",
    style: "button",
    text: "8",
    type: "digit",
  },
  {
    btnId: "nine",
    style: "button",
    text: "9",
    type: "digit",
  },
  {
    btnId: "add",
    style: "button height-two",
    text: "+",
    type: "operator",
  },
  {
    btnId: "four",
    style: "button",
    text: "4",
    type: "digit",
  },
  {
    btnId: "five",
    style: "button",
    text: "5",
    type: "digit",
  },
  {
    btnId: "six",
    style: "button",
    text: "6",
    type: "digit",
  },
  {
    btnId: "one",
    style: "button",
    text: "1",
    type: "digit",
  },
  {
    btnId: "two",
    style: "button",
    text: "2",
    type: "digit",
  },
  {
    btnId: "three",
    style: "button",
    text: "3",
    type: "digit",
  },
  {
    btnId: "equals",
    style: "button height-two",
    text: "=",
    type: "equals",
  },
  {
    btnId: "zero",
    style: "button span-two",
    text: "0",
    type: "digit",
  },
  {
    btnId: "decimal",
    style: "button",
    text: ".",
    type: "digit",
  },
];

function ButtonPad(props) {
  return (
    <div className='button-wrapper'>
      {buttonObj.map((btn) => {
        return (
          <button
            key={btn.btnId}
            className={btn.style}
            id={btn.btnId}
            onClick={() => props.handler(btn.type, btn.text)}>
            {btn.text}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonPad;
