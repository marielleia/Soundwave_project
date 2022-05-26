import React from "react";
import Microphone from '../images/microphone.svg';
import Albums from '../images/albums.svg';
import More from '../images/more.svg';
import Covers from '../images/covers.jpg';

function Discover() {
    return (
          <section className="discover">
              <div className="text-discover">
                <h1>Discover new music</h1>
                <div className="icons">
                    <img src={Microphone} className= "microfono" alt="microfono"/>
                    <img src={Albums} className= "albums" alt="albums"/>
                    <img src={More} className= "more" alt="more"/>
                </div>
                <h6>By joining you can benefit by listening to the latest albums released.</h6>
              </div>

              <div className="cover">
                <img src = {Covers} className= "covers" alt="covers" width={300} height={300}/>
              </div>
          </section>
    );
  }
  
  export default Discover;