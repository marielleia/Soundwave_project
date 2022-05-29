import React from "react";
import Menu from "./components/Menu";
import Portada from "./components/Portada";
import Footer from "./components/Footer";
import Discover from "./components/Discover";
import Join from "./components/Join";
import './App.css';
import './components/Menu.css';
import './components/Portada.css';
import './components/ImageHero.css';
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

        <section id= '#portada'>
      
            <Portada/>

        </section>

        <section id='discover'>

          <Discover/>

        </section>

        <section id='join'>

          <Join/>

        </section>

        <footer>

            <Footer/>
            
        </footer>
      </main>
  );
}

export default App;