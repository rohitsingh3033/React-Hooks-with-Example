import React, { useState } from "react";
import "./App.css";
import './CComponent';
// import CComponent from "./CComponent";
import FComponent from "./FComponent";
const App = () => {
  const [flag, setFlag] = useState(true);
  return (
    <div className="App">
      <div>
        {/* <button onClick={() => setFlag(!flag)}>Toggle Class Component</button> */}
        <button onClick={() => setFlag(!flag)}>Toggle Function Component</button>
      </div>
      {/* {flag ? <CComponent /> : ""} */}
      {flag ? <FComponent /> : ""}
    </div>
  );
};

export default App;
