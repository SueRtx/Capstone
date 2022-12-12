import React from 'react'
import Slide from 'react-reveal/Slide'

import cleanImage from "../../assets/images/clean.jpg";
import chairImage from "../../assets/images/chair.jpg";
import whiteImage from "../../assets/images/white.png";

import './service.scss'

const Service = () => {
  return (
    <div className="section-service-wrapper section__padding">
<h1>Services</h1> 
    <article className="section-service-description">
      {/* <h1>Services</h1>  */}
     
        <h3>Our experienced and friendly dental staff is here to take care of your smile and needs.</h3>
    
   
      <Slide bottom>
      <div>
      {/* <img src={ cleanImage } className="cleanImg" alt="temp" width='30%'/> */}
        <h2> PREVENTIVE DENTISTRY</h2>
        <ul>
          <li>Dental Checkups</li>
          <li>Dental Clennings</li> 
          <li>Scaling</li>
          <li>Sealent</li>  
          <li>Fluoride Treatments</li>
          <li>Nightguards for Bruxism</li>  
          </ul>
          <img src={ cleanImage } className="cleanImg" alt="temp" width='30%'/> 
          </div>
      </Slide>
   

     
      <Slide bottom >
      {/* <img src={ chairImage } className="chairImg" alt="temp" width='30%'/> */}
      <div>
        <h2> GENERAL DENTISTRY</h2>
        <ul>
          <li>Tooth-Colored Fillings</li>
          <li>Root Canals</li> 
          <li>Crowns / Implant Crowns</li>
          <li>Dental Bridges</li>  
          <li>Extractions</li>
          <li>Partials / Dentures</li>
        </ul>
        <img src={ chairImage } className="chairImg" alt="temp" width='30%'/>
        </div>
      </Slide>
 
   
      
      <Slide bottom>
      <div>
      {/* <img src={ whiteImage } className="chairImg" alt="temp" width='30%'/> */}
        <h2> COSMETIC DENTISTRY</h2>
        <ul>
          <li>Veneers</li>
          <li>Metal-Free Crowns</li> 
          <li>Cosmetic Bonding</li>
          <li>Dental Bridges</li>  
          <li>Teeth Whitening</li>
          <li>Gum Recontouring</li>
        </ul>
        <img src={ whiteImage } className="whiteImg" alt="temp" width='30%'/>
        </div>
      </Slide>
     
    </article>
    
  </div>
  )
}

export default Service