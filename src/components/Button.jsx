import React from "react";

function Button(props) {
  return (
    <>
      <button
        className={`${props.value.toLowerCase()}-btn`}
        onClick={() => props.onClick()}
      >
        {props.value}
      </button>
    </>
  );
}
export default Button;
