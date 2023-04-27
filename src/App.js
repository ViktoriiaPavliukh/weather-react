import React from "react"
import Weather from "./Weather";
import Link from './Link';
import './App.css';

function App() {
  return (
    <div className="weather-app">
      <main className="weather-main">
        <Weather defaultCity="Kyiv" />
      </main>
      <footer className="weather-footer">
        <Link />
      </footer>
    </div>
  );
}

export default App;
