import React from "react";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  return (
    <main className="app">
      <header>
        <h1>🌦 Weather Report Application</h1>
      </header>
      <Weather />
    </main>
  );
}

export default App;