import React, { useState, useRef, useEffect } from "react";
import "./App.css";

const App = () => {
  /*
    1. DOM reference
    2. useRef for storing the previous state
    3. hold mutable value prevent re-render of component
  */

  const [name, setName] = useState("");
  const [counter, SetCounter] = useState(0);
  const inputE1 = useRef("");
  const previousCounter = useRef("");
  //console.log(counter);
  useEffect(() => {
    previousCounter.current = counter;
  }, [counter]);
  const reset = () => {
    setName("");
    inputE1.current.focus();
    //const name = inputE1.current.value;
    //setName(name);
    //setName("");
    //inputE1.current.value = ''
  };
  return (
    <div className="App">
      <hr />
      <input
        ref={inputE1}
        type="text"
        autoComplete="off"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={reset}>Reset</button>
      <hr />
      <p>My name is {name}</p>
      <hr />
      <div>
        <h1>Random Counter : {counter}</h1>
        <hr />
        {typeof previousCounter.current !== "undefined" && (
          <h2>Previous Counter : {previousCounter.current}</h2>
        )}
        <hr />
        <button onClick={(e) => SetCounter(Math.ceil(Math.random() * 100))}>
          Generate Number
        </button>
      </div>
    </div>
  );
};

export default App;
