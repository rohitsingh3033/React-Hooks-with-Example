import React, { useState, useMemo, useEffect, useCallback } from "react";
import "./App.css";

const App = () => {
  /*
    Use Cases :-
    1. Memoize the function (useCallback) vs Memoize the value (useMemo)
    2. Referential equality for function
  */
  const [counter, setCounter] = useState(1);
  
  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);

  const [name, setName] = useState("");
  // const displayName = () =>{
  //   return name;
  // }
  const displayName = useCallback(() => {
    return name;
  }, [name]);

  return (
    <div className="App">
      <h1>
        Factorial of {counter} is : <span>{result}</span>
      </h1>
      <div>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
      <hr />
      <div>
        <div>
          <label>Enter Name</label>
        </div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <hr />
        <DisplayName displayName={displayName}></DisplayName>
      </div>
    </div>
  );
};

const DisplayName = ({displayName}) => {
  const [value, setValue] = useState('');
  useEffect (() => {
    setValue(displayName());
    console.log('component rendered');
  }, [displayName]);
  return <p>My name is {value}</p>;
};

function factorial(n) {
  // let i = 0;
  // while (i < 200000000) i++;
  if (n < 0) return -1;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

export default App;
