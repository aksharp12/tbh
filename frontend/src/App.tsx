import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="root">
      <div className="App">
        <img className="logo" src="tbh.svg" />
      </div>
      <div className="form-div">
        <label>How are you feeling today?</label>
        <input className="textarea1" type="textarea" />
      </div>
      <div className="form-div mt-60">
        <label>Are there any topics you would like covered next week?</label>
        <input className="textarea2" type="textarea" />
      </div>
      <button className="button">Submit</button>
    </div>
  );
}

export default App;
