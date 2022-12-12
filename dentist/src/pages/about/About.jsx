import React from 'react'
import Fade from 'react-reveal/Fade'
import './about.scss'
import drImage from "../../assets/images/drAhn.jpg";
import smileImage from "../../assets/images/tooth.jpeg";

const About = () => {
  return (

  <div className="section-about-wrapper section__padding">
    <h1>About Us</h1> 
      <article className="section-about-description">
  
        <Fade bottom>  
          <img src={drImage } className="drAhn-Img" alt="temp" width='20%' />
      
          <h2>Meet Dr. Jin Ahn DMD</h2>
          <p > Dr. Ahn attended the Southern Illinois University School of Dental Medicine, where he graduated with honors. Returning to St Louis, he completed a residency at Saint Louis Hospital, where he received advanced training in emergency general dentistry. After his residency, he has been practicing in the Oregon Coast area since 1994.
          </p>
        </Fade>
        <br />
        <Fade bottom >
          <img src={smileImage } className="smile-Img" alt="temp" width='20%'  />
          <h2>Our Philosophy</h2>
          <p className="sec-2"> Tillamook Family Dentistry is here to provide you with a dental experience marked by gentle, compassionate and economic care.<br /> We provide one on one approach to our patients. We work with very caring and professional specialists to provide you the best dental experience as possible to our patients. 
          </p>
        </Fade>
      </article>

    </div>
  ) 
}

export default About