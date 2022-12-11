import React from 'react'
import Fade from 'react-reveal/Fade'

import cleanImage from "../../assets/images/clean.jpg";
import chairImage from "../../assets/images/chair.jpg";
import whiteImage from "../../assets/images/white.png";

import './service.scss'

const Service = () => {
  return (
    <div className="section-service-wrapper section__padding">

    <article className="section-service-description">
      <h1>Services</h1> 
      <Fade bottom>
        <h3>Regardless of age, every patient should attend a dental checkup and cleaning once every six months. Dr. Ahn will have the opportunity to stop cavities, gum disease, and other oral health problems in their tracks, saving you from future headaches and toothaches! Our hygiene can also give your teeth a professional cleaning to remove cavity-causing plaque and  provide tips on maintaining pearly white teeth at home.</h3>
      </Fade>
      <br />
      <Fade bottom>
      <img src={ cleanImage } className="cleanImg" alt="temp" width='30%'/>
        <h2> PREVENTIVE DENTISTRY</h2>
        <ul>
          <li>Dental Checkups</li>
          <li>Dental Clennings</li> 
          <li>Scaling</li>
          <li>Nightguards for Bruxism</li>  
          <li>Fluoride Treatments</li>
          </ul>
      </Fade>
      <br />
      <Fade bottom>
      <img src={ chairImage } className="cleanImg" alt="temp" width='30%'/>
        <h2> GENERAL DENTISTRY</h2>
        <ul>
          <li>Tooth-Colored Fillings</li>
          <li>Root Canals</li> 
          <li>Crowns / Implant Crowns</li>
          <li>Dental Bridges</li>  
          <li>Extractions</li>
          <li>Partials / Dentures</li>
          <li>Extractions</li>
        </ul>
      </Fade>
      <br />
      <Fade bottom>
      <img src={ whiteImage } className="cleanImg" alt="temp" width='30%'/>
        <h2> COSMETIC DENTISTRY</h2>
        <ul>
          <li>Veneers</li>
          <li>Metal-Free Crowns</li> 
          <li>Cosmetic Bonding</li>
          <li>Dental Bridges</li>  
          <li>Teeth Whitening</li>
          <li>Gum Recontouring</li>
        </ul>
      </Fade>
      
    </article>
    
  </div>
  )
}

export default Service