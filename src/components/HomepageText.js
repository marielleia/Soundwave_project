import React from 'react';
import "./HomepageText.css";
import Button from 'react-bootstrap/Button';

function HomepageText() {
    return (
      <div className='HomepageText'>
          <h1>Feel The Music</h1>
          <h6>Stream over 20 thousand songs with one click</h6>
          <Button href="#join"className='button-joinow'>Join Now</Button>
      </div>
    );
  }
  
export default HomepageText;