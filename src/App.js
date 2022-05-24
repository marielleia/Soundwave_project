import './App.css';
import Menu from "./components/Menu";
import ImageHero from "./components/ImageHero.js";
import HomepageText from "./components/HomepageText.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
        <ImageHero/>
        <HomepageText/>
      </header>
    </div>
  );
}

export default App;