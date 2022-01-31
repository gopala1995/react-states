import { useState } from "react";
import "./Counter.css"

export const Counter = () => {
  const [counter, setCounter] = useState(1);
  const clicFun = (val) => {
    setCounter(counter + val);
  };
  if (counter === 12) {
    return <h1>You have reached to the maximun</h1>;
  }
  return (
    <div>
      <h1>Couner:{counter}</h1>
      <h3 className={counter % 2 === 0 ? "red" : "green"}>
        Number is:{counter % 2 === 0 ? "Even" : "Odd"}
      </h3>
      <button onClick={() => clicFun(1)}>Increment</button>
      <button onClick={() => clicFun(-1)}>Decrement</button>
    </div>
  );
};
