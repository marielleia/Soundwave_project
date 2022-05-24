import Landingpagegirl from '../images/landing-page-girl.png'
function ImageHero() {
  return (
    <header>
    <div className="ImageHero">
        <img src={Landingpagegirl} alt="landing-page-girl" width={400}/>
    </div>
    </header>
  );
}

export default ImageHero;