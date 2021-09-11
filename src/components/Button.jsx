import React, { useState, useEffect } from "react";

function Button(props) {
  const [active, setActive] = useState(false);
  const handlePressed = (event) => {
    if (event.code === props.code) {
      props.handler(props.type, props.text);
      setActive(true);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handlePressed);
    window.addEventListener("keyup", () => setActive(false));
    return () => {
      window.removeEventListener("keydown", handlePressed);
      window.removeEventListener("keyup", () => setActive(false));
    };
  });
  return (
    <>
      <button
        key={props.id}
        className={active ? props.style + " active" : props.style}
        id={props.id}
        onClick={() => props.handler(props.type, props.text)}>
        {props.text}
      </button>
    </>
  );
}

export default Button;
