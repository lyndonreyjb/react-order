import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} className="text-center" />
    </div>
  );
});

export default Input;
