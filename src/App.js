import React from "react"
// import Search from "./components/Search";
import Link from './Link';
import './App.css';

function App() {
  return (
    <div className="Weather-App">
      <header className="App-header">
        <p>
         Weather App
        </p>
        {/* <Search /> */}
      </header>
      <footer>
        <Link />
      </footer>
    </div>
  );
}

export default App;
