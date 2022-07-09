import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Cristal and is {""}
          <a
            href="https://github.com/codingcalypso/shecodes-weather-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            opened-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://inquisitive-pastelito-2cdb00.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
