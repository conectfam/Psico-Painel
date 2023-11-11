// components/About.js
import React from 'react';
import bgImage from '../images/Background-logo.png';
import './About.css';

function About() {
    return (
      <div>
       <center><img src={bgImage} alt="Background Logo" className="about-bg" /></center> 
        {/* Rest of your component */}
      </div>
    );
  }
  

export default About;
