import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React, { useCallback, useMemo, useState } from "react";

const ExpensiveCalculation = (num: number) => {
  console.log("Running expensive calculation...");
  return num * 2;
};

const ChildComponent = React.memo(
  ({ onButtonClick }: { onButtonClick: () => void }) => {
    console.log("ChildComponent re-rendered!");
    return <button onClick={onButtonClick}>Click Me</button>;
  }
);

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Memoizing the callback to avoid re-creating onButtonClick function on each render
  const onButtonClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  // Using useMemo to avoid recalculating the result on every render
  const memoizedValue = useMemo(() => ExpensiveCalculation(count), [count]);

  return (
    <div>
      <h1>Memoized Value: {memoizedValue}</h1>
      <ChildComponent onButtonClick={onButtonClick} />
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ParentComponent />
    </>
  );
}

export default App;
