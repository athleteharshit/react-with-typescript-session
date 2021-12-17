import React from "react";


export type CountProps = {
  text: "age" | "salary";
  count: number;
};

function Count({ text, count }: CountProps) {
  console.log("rendeting", text);
  return (
    <div>
      <p>
        {text} {count}
      </p>
    </div>
  );
}

export default Count;
