import { useState } from "react";
import Button from "./Button";
import Count from "./Count";
import List from "./List";

function ParentComponent() {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  const handleIncrementAge = () => {
    setAge((pre) => pre + 1);
  };
  const handleIncrementSalary = () => {
    setSalary((pre) => pre + 10);
  };
  return (
    <div>
      <List />
      <Count text="age" count={age} />
      <Button handleClick={handleIncrementAge}>increment age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={handleIncrementSalary}>increment salary</Button>
    </div>
  );
}

export default ParentComponent;
