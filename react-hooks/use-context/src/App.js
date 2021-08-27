import React, { useState } from "react";
import "./App.css";
import FComponent from "./FComponent";
// import CComponent from "./CComponent";
import { CounterContext } from "./CounterContext";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App border">
      <h1>App Component</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr />
      <CounterContext.Provider value = {{counter, setCounter}}>
        <FComponent></FComponent>
        <hr />
        {/* <CComponent></CComponent> */}
      </CounterContext.Provider>

      {/* Below one is previously did */}

      {/* <CounterContext.Provider value = 'Hello Context'>
        <FComponent counter={counter}></FComponent> 
        <hr />
        <CComponent counter={counter}></CComponent>
      </CounterContext.Provider> */}
    </div>
  );
};

export default App;
