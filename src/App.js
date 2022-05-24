import './App.css';
import Menu from "./components/Menu";
import ImageHero from "./components/ImageHero.js";
import HomepageText from "./components/HomepageText.js";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <section className="App">
        <header className="App-header">
            <Menu/>
            <ImageHero/>
            <HomepageText/>
        </header>
    </section>
    <footer>
        <Footer/>
    </footer>
    </>
  );
}

export default App;