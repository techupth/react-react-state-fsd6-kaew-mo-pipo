import "./App.css";
import { useState } from "react";

function App() {
  const [language, uselanguage] = useState("Greeting Message");

  return (
    <div className="App">
      <div className="greeting-container">{language}</div>
      <div className="buttons">
        <button onClick={() => uselanguage("สวัสดี!")}>สวัสดี!</button>
        <button onClick={() => uselanguage("Hi!")}>Hi!</button>
        <button onClick={() => uselanguage("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;
