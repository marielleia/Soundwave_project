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

                    <div>
                    <img src={Microphone} className= "microfono" alt="microfono"/>
                    <span><h6>Charts</h6></span>
                    </div>
                    <div>
                    <img src={Albums} className= "albums" alt="albums"/>
                    <span><h6>Albums</h6></span>
                    </div>
                    <div>
                    <img src={More} className= "more" alt="more"/>
                    <span><h6>More</h6></span>
                    </div>
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