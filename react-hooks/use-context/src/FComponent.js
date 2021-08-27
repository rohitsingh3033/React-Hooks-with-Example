import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

// const FComponent = ({ counter }) => {
const FComponent = () => {
  //   const value = useContext(CounterContext);
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div className="border">
      <h1>Function Component</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      {/* <h2>{value}</h2> */}
      <hr />
      <FChild counter={counter} />
    </div>
  );
};

// function FChild({ counter }) {
function FChild() {
  //   const value = useContext(CounterContext);
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div className="border">
      <h1>Function child Component</h1>
      <h2> {counter} </h2>
      <button onClick= {() => setCounter(counter - 1)}>Decrement</button>
      {/* <h2>{value}</h2> */}
      <hr />
    </div>
  );
}

export default FComponent;
