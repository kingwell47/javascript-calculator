import React, { useState, useEffect } from "react";
import "./App.scss";
import ButtonPad from "./components/ButtonPad";
import Display from "./components/Display";

/* 

Adapted some code and functions from WebDev Simplified's Javascript Calculator
https://github.com/WebDevSimplified/Vanilla-JavaScript-Calculator/blob/master/script.js
(Also fixed some of it's issues)

*/

const INIT = "0";

function App() {
  const [display, setDisplay] = useState(INIT);
  const [history, setHistory] = useState(INIT);
  const [displayOperator, setDisplayOperator] = useState(undefined);
  const [operand1, setOperand1] = useState(INIT);
  const [operand2, setOperand2] = useState(INIT);
  const [operator, setOperator] = useState(undefined);
  const [displayingResults, setDisplayingResults] = useState(false);

  const handleClick = (type, text) => {
    switch (type) {
      case "clear":
        setHistory(INIT);
        setDisplay(INIT);
        setOperand1(INIT);
        setOperand2(INIT);
        setOperator(undefined);
        setDisplayOperator(undefined);
        return;
      case "digit":
        getOperand(text);
        return;
      case "equals":
        calculate();
        if (operator !== undefined) {
          setDisplayingResults(true);
        }
        return;
      case "operator":
        handleOperator(text);
        return;
      default:
        return;
    }
  };

  let currentResult = 0;

  const handleOperator = (ops) => {
    if (operand2 === INIT) return;
    if (operand1 !== INIT) {
      calculate();
    }
    setOperator(ops);
    if (currentResult === 0) {
      setOperand1(operand2);
    } else {
      setOperand1(currentResult);
    }
    setOperand2(INIT);
  };

  const calculate = () => {
    let result = 0;
    const value1 = parseFloat(operand1);
    const value2 = parseFloat(operand2);
    if (operand2 === "0" || operand1 === "0") return;
    switch (operator) {
      case "+":
        result = value1 + value2;
        break;
      case "-":
        result = value1 - value2;
        break;
      case "÷":
        result = value1 / value2;
        break;
      case "x":
        result = value1 * value2;
        break;
      default:
        return;
    }

    currentResult = result;
    setOperand2(currentResult);
    setOperator(undefined);
    setOperand1(INIT);
  };

  const getOperand = (currentDigit) => {
    if (displayingResults === true) {
      setOperand2(currentDigit);
      setDisplayingResults(false);
      return;
    }
    if (currentDigit === "." && operand2.includes(".")) {
      return;
    } else if (currentDigit === "0" && operand2 === "0") {
      return;
    } else if (currentDigit !== "0" && operand2 === "0") {
      setOperand2(currentDigit);
      return;
    }

    setOperand2(operand2 + currentDigit);
  };

  const getDisplayNumber = (number) => {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  };

  useEffect(() => {
    const updateDisplay = () => {
      setDisplay(getDisplayNumber(operand2));
      if (operator !== null) {
        setHistory(getDisplayNumber(operand1));
        setDisplayOperator(operator);
      } else {
        setHistory(INIT);
      }
    };
    updateDisplay();
  }, [operand1, operand2, operator]);

  return (
    <div className='app'>
      <Display display={display} history={history} operator={displayOperator} />
      <ButtonPad handler={handleClick} />
    </div>
  );
}

export default App;
