import React from "react";
import Menu from "./components/Menu";
import Portada from "./components/Portada";
import Footer from "./components/Footer";
import Discover from "./components/Discover";
import Join from "./components/Join";
import './App.css';
import './components/Menu.css';
import './components/Portada.css';
import './components/HomepageText.css';
import './components/Discover.css';
import './components/Join.css';
import './components/Footer.css';
import "@fontsource/poppins";

function App() {
  return (
      <main className='App'>

        <header>
            <Menu/>
        </header>


            <Portada/>


            <Discover/>

        
            <Join/>      
        <footer>
            <Footer/>
        </footer>

      </main>
  );
}

export default App;