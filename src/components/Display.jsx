import React from "react";

function Display(props) {
  return (
    <>
      <div className='display-wrapper'>
        <p className='history'>
          {props.history} {props.operator}
        </p>
        <p className='display' id='display'>
          {props.display}
        </p>
      </div>
    </>
  );
}

export default Display;
