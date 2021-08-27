//import React, { useState } from "react";
import React from "react";
import "./App.css";
import useCounter from "./useCounter";
import ScreenComponent from "./ScreenComponent";

const App = () => {
  // const [counter, setCounter] = useState(0);
  const [counter, increment, decrement, reset] = useCounter(0);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  // const decrement = () => {
  //   setCounter(counter - 1);
  // };

  return (
    <div className="App border">
      <h1>useCustom Hook</h1>
      <h2>{counter}</h2>
      <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      </div>
      <ScreenComponent></ScreenComponent>
    </div>
  );
};

export default App;
