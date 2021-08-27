import React, { useState, useReducer } from "react";
import "./App.css";

//const initialState = 0;
const initialState = [
  { id: Date.now(), name: "Rohit Singh", email: "rohit@gmail.com" },
];

function reducer(state, action) {
  switch (action.type) {
    //case 'increment' :
    case "add":
      //return state + 1;
      return [...state, action.payload];
    //case 'decrement':
    case "delete":
      //return state - 1;
      return state.filter((contact) =>{
        return contact.id !== action.payload.id;
      })
    default:
      throw new Error();
  }
}

const App = () => {
  // const [counter, setCounter] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log(state); // const increment = () => {
  //   setCounter(counter + 1);
  // };

  // const decrement = () => {
  //   setCounter(counter - 1);
  // };

  const addContact = (e) => {
    e.preventDefault();
    const contact = {
      id: Date.now(),
      name,
      email,
    };
    setName("");
    setEmail("");
    dispatch({ type: "add", payload: contact });
  };

  return (
    <div className="App border">
      <h1>useReducer Hook</h1>
      <form onSubmit={addContact}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <button>Add Contact</button>
        </div>
      </form>
      <hr />
      <div>
        <ul>
          {state.map((contact) => {
            return (
              <li key={contact.id}>
                <h2> {contact.name} </h2>
                <h2> {contact.email} </h2>
                <div>
                  <button
                    onClick={() =>
                      dispatch({ type: "delete", payload: { id: contact.id } })
                    }
                  >
                    Delete
                  </button>
                </div>
                <hr />
              </li>
            );
          })}
        </ul>
        <hr />
      </div>
      {/* <h2>{counter}</h2> */}
      {/* <h2>{state}</h2>
      <button onClick={() => dispatch({type : 'increment'})}>Increment</button>
      <button onClick={() => dispatch({type : 'decrement'})}>Decrement</button> */}
    </div>
  );
};

export default App;
