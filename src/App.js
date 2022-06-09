import React from "react";
import Menu from "./components/Menu";
import Main from "./components/Main.js";
import Discover from "./components/Discover";
import Join from "./components/Join";
import './App.css';
import './components/Menu.css';
import './components/Main.css';
import './components/HomepageText.css';
import './components/Discover.css';
import './components/Join.css';
import './components/Footer.css';
import "@fontsource/poppins";

function App() {
  return (
      <main className='App'>
            <Menu/>
            <Main/>
            <Discover/>
            <Join/>      
      </main>
  );
}

export default App;