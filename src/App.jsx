import React, { useState } from "react";
import "./App.scss";
import ButtonPad from "./components/ButtonPad";
import Display from "./components/Display";

const INIT = "0";

function App() {
  const [display, setDisplay] = useState(INIT);
  const [history, setHistory] = useState(INIT);
  const [operator, setOperator] = useState(undefined);

  const handleClick = (type, text) => {
    switch (type) {
      case "clear":
        setHistory(INIT);
        setDisplay(INIT);
        setOperator(undefined);
        return;
      case "digit":
        changeDisplay(text);
        return;
      case "equals":
        calculate();
        return;
      case "operator":
        handleOperator(text);
        return;
      default:
        return;
    }
  };

  const handleOperator = (ops) => {
    if (display === INIT) return;
    if (history !== INIT) {
      calculate();
    }
    setOperator(ops);
    setHistory(display);
    setDisplay(INIT);
  };

  const calculate = () => {
    let result = 0;
    let value1 = parseFloat(history);
    let value2 = parseFloat(display);
    if (display === "0" || history === "0") return;
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
    setDisplay(result);
    setHistory(INIT);
    setOperator(undefined);
  };

  const changeDisplay = (newDisplay) => {
    let forDisplay = newDisplay.toString();

    if (forDisplay === "." && display.includes(".")) {
      return;
    } else if (forDisplay === "0" && display === "0") {
      return;
    } else if (forDisplay !== "0" && display === "0") {
      setDisplay(forDisplay);
      return;
    }

    setDisplay(display + forDisplay);
  };

  return (
    <div className='app'>
      <Display display={display} history={history} operator={operator} />
      <ButtonPad handler={handleClick} />
    </div>
  );
}

export default App;
