import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Greeting Message");
  function handleThai() {
    setMessage("สวัสดี!");
  }
  function handleEng() {
    setMessage("Hi!");
  }
  function handleChi() {
    setMessage("你好!");
  }
  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="buttons">
        <button onClick={handleThai}>สวัสดี!</button>
        <button onClick={handleEng}>Hi!</button>
        <button onClick={handleChi}>你好!</button>
      </div>
    </div>
  );
}

export default App;
