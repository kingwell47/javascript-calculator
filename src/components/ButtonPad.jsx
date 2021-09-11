import React from "react";
import Button from "./Button";

const buttonObj = [
  {
    btnId: "clear",
    style: "button",
    text: "AC",
    type: "clear",
    btnCode: "NumLock",
  },
  {
    btnId: "divide",
    style: "button",
    text: "÷",
    type: "operator",
    btnCode: "NumpadDivide",
  },
  {
    btnId: "multiply",
    style: "button",
    text: "x",
    type: "operator",
    btnCode: "NumpadMultiply",
  },
  {
    btnId: "subtract",
    style: "button",
    text: "-",
    type: "operator",
    btnCode: "NumpadSubtract",
  },
  {
    btnId: "seven",
    style: "button",
    text: "7",
    type: "digit",
    btnCode: "Numpad7",
  },
  {
    btnId: "eight",
    style: "button",
    text: "8",
    type: "digit",
    btnCode: "Numpad8",
  },
  {
    btnId: "nine",
    style: "button",
    text: "9",
    type: "digit",
    btnCode: "Numpad9",
  },
  {
    btnId: "add",
    style: "button height-two",
    text: "+",
    type: "operator",
    btnCode: "NumpadAdd",
  },
  {
    btnId: "four",
    style: "button",
    text: "4",
    type: "digit",
    btnCode: "Numpad4",
  },
  {
    btnId: "five",
    style: "button",
    text: "5",
    type: "digit",
    btnCode: "Numpad5",
  },
  {
    btnId: "six",
    style: "button",
    text: "6",
    type: "digit",
    btnCode: "Numpad6",
  },
  {
    btnId: "one",
    style: "button",
    text: "1",
    type: "digit",
    btnCode: "Numpad1",
  },
  {
    btnId: "two",
    style: "button",
    text: "2",
    type: "digit",
    btnCode: "Numpad2",
  },
  {
    btnId: "three",
    style: "button",
    text: "3",
    type: "digit",
    btnCode: "Numpad3",
  },
  {
    btnId: "equals",
    style: "button height-two",
    text: "=",
    type: "equals",
    btnCode: "NumpadEnter",
  },
  {
    btnId: "zero",
    style: "button span-two",
    text: "0",
    type: "digit",
    btnCode: "Numpad0",
  },
  {
    btnId: "decimal",
    style: "button",
    text: ".",
    type: "digit",
    btnCode: "NumpadDecimal",
  },
];

function ButtonPad(props) {
  return (
    <div className='button-wrapper'>
      {buttonObj.map((btn) => {
        return (
          <Button
            key={btn.btnId}
            style={btn.style}
            id={btn.btnId}
            type={btn.type}
            text={btn.text}
            code={btn.btnCode}
            handler={props.handler}
          />
        );
      })}
    </div>
  );
}

export default ButtonPad;
