import './App.css';
import Menu from "./components/Menu";
import Portada from "./components/Portada";
import Footer from "./components/Footer";
import './components/Menu.css';
import './components/Portada';
import './components/ImageHero.css';
import './components/Footer.css';

function App() {
  return (
    <>
    <body>
      <main className='App'>

        <header>

            <Menu/>

        </header>

        <section className='Portada'>
      
            <Portada/>

        </section>

        <section className='Discover'>

        </section>

        <section className='Join'>

        </section>

        <footer>

            <Footer/>
            
        </footer>
      </main>
    </body>
    </>
  );
}

export default App;