import { useEffect, useRef, useState } from "react";

function Mutable() {
  const [time, setTime] = useState(0);
  const inputValRef = useRef<number | undefined>(undefined);

  const stopTimer = () => {
    if (inputValRef.current) {
      clearTimeout(inputValRef.current);
    }
  };

  useEffect(() => {
    inputValRef.current = window.setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);
  return <div></div>;
}

export default Mutable;
