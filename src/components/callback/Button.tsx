import React from "react";

type ButtonProps = {
  handleClick: () => void;
  children: React.ReactNode;
};

function Button({ handleClick, children }: ButtonProps) {
  console.log("rendring button", children);
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}

export default Button;
