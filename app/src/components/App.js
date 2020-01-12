import React from "react";
import logo from "../images/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This React app is server rendered with Parcel. NOICE :D.</p>
      </header>
    </div>
  );
}

export default App;
