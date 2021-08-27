import React from "react";
import useScreen from "./useScreen";

const ScreenComponent = () => {
    const screenSize = useScreen();
  return (
    <div className="App">
      <h1>ScreenComponent</h1>
      <h2>we are in {screenSize} screen</h2>
    </div>
  );
};

export default ScreenComponent;
