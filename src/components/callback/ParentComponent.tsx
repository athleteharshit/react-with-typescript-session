import { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import List from "./List";

function ParentComponent() {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  const handleIncrementAge = useCallback(() => {
    setAge((pre) => pre + 1);
  }, [age]);

  const handleIncrementSalary = useCallback(() => {
    setSalary((pre) => pre + 10);
  }, [salary]);

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
