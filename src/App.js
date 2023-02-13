import "./styles.css";
import { useRef, useState } from "react";

export default function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const id = useRef(0);

  const startTimer = () => {
    id.current = setInterval(() => {
      setCurrentValue((previousValue, curr) => {
        return (curr = previousValue + 1);
      });
    }, 1000);
    console.log(id.current);
  };

  const stopTimer = () => {
    console.log(id.current);
    clearInterval(id.current);
    setCurrentValue(currentValue);
  };

  return (
    <div className="App">
      <h1 id={currentValue}>{currentValue}</h1>
      <button onClick={startTimer}> Start </button>
      <button onClick={stopTimer}> Stop </button>
    </div>
  );
}
