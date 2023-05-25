import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Yangon" />
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://portfoliokhin.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Khin
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/ClaraKhin/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-source
        </a>
      </footer>
    </div>
  );
}

export default App;
