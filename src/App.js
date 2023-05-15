import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1>Check The Weather</h1>
        <Weather />
      </div>

      <p>
        Coded By
        <a
          href="https://github.com/ClaraKhin"
          className="Address"
          target="blank"
        >
          {" "}
          Khin
        </a>{" "}
      </p>
      <p>
        <a
          href="https://github.com/ClaraKhin/weather-react"
          className="SourceCode"
          target="blank"
        >
          Source Code
        </a>
      </p>
    </div>
  );
}

export default App;
