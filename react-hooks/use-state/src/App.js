import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("Rohit");
  const [flag, setFlag] = useState(false);
  // const [steps, setSteps] = useState(0);
  const [steps, setSteps] = useState(() => {  //useState called only once
    console.log('clicked');
    return 0;
  });
  const [names, setNames] = useState([]);
  const changeName = () => {
    // console.log("clicked");
    // if (name === "Rohit") {
    //   setName("Rohit Singh");
    // } else {
    //   setName("Rohit");
    setFlag(!flag);
    // }
  };
  const increment = () => {
    setSteps((prevState) => prevState + 1);
    setSteps((prevState) => prevState + 1);
  };
  const decrement = () => {
    setSteps(steps - 1);
  };
  const addNames = (e) => {
    e.preventDefault();
    setNames([...names, {id: names.length, name}]);
    setName(''); 
  };

  return (
    <div className="App">
      {/* <div> Hello, {name}</div> */}
      <div> Hello, {flag ? name : "Singh"}</div>
      <button onClick={changeName}>Click Me</button>
      <hr />
      <button onClick={increment}>+</button>
      <div>{steps}</div>
      <button onClick={decrement}>-</button>
      <hr />
      <form onSubmit={addNames}>
        <input
          type="text"
          value={name}
          placeholder="add names"
          onChange={(e) => setName(e.target.value)}
        />
        <button>submit</button>
      </form>
      <hr />
      <ul>
        {names.map((item) => (
          <li key = {item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

// const App = () => {

//   //console.log(useState);
//   //const [counter , setCounter] = useState(0);
//   const [inputValue , setInputValue] = useState('Rohit');

//   // const increment = () =>{
//   //   setCounter(counter + 1);
//   // }

//   const changeValue = (e) =>{
//     const newValue = e.target.value;
//     setInputValue(newValue);
//   }

//   return (
//     <div className = 'App'>
//       {/* <h1>{counter}</h1>
//       <h1 className="App-header"><button onClick={increment}>Increment</button></h1> */}
//       <div className="App-header">
//         <input type="text" placeholder='enter something here...' onChange={changeValue}/>
//         {inputValue}
//       </div>
//     </div>
//   )
// }

export default App;
