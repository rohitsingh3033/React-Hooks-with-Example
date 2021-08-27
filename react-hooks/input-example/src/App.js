import React, { useState, useRef } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState();
  const textInput = useRef();
  const showText = () => {
    // const name = textInput.current.value;
    const temp = textInput.current;
    const name = `${temp['first'].value} ${temp['sec'].value}`;
    console.log(name);
    setName(name);
  };
  return (
    <div className="App">
      <div className="App-header">
        <form ref={textInput}>
          <input type="text" name={"first"}></input>
          <input type="text" name={"sec"}></input>
        </form>
        {/* <input type = 'text' ref = {textInput}></input> */}
        <p>{name}</p>
        <button onClick={showText}>Click me</button>
      </div>
    </div>
  );
};

export default App;
