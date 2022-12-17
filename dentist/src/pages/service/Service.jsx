import React from 'react'
import Slide from 'react-reveal/Slide'
import careImg from "../../components/images/care2.png";
import cleanImage from "../../components/images/clean.jpg";
import chairImage from "../../components/images/dentistry.png";
import whiteImage from "../../components/images/white.png";

import './service.scss'

const Service = () => {
  return (
    <>
      <div className="section-service-wrapper section__padding">
        <h1>Services</h1> 
        
        <article className="section-service-description">
          <Slide bottom>
            <img src={ careImg } className="careImg" alt="temp" width='13%'/>
            <h3>
              OUR EXPERIENCED AND FRIENDLY DENTAL STAFF IS<br />HERE TO TAKE CARE OF YOUR SMILE AND NEEDS.
            </h3>
          </Slide>

          <Slide bottom>
            <div>
              <h2> PREVENTIVE DENTISTRY</h2>
              <ul>
                <li>Dental Checkups</li>
                <li>Dental Clennings</li> 
                <li>Scaling</li>
                <li>Sealent</li>  
                <li>Fluoride Treatments</li>
                <li>Nightguards for Bruxism</li>  
              </ul>
              <img src={ cleanImage } className="cleanImg" alt="temp" width='25%'/> 
            </div>
          </Slide>
        
          <Slide bottom >
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
              <img src={ chairImage } className="chairImg" alt="temp" width='25%'/>
            </div>
          </Slide>

          <Slide bottom>
            <div>
              <h2> COSMETIC DENTISTRY</h2>
              <ul>
                <li>Veneers</li>
                <li>Metal-Free Crowns</li> 
                <li>Cosmetic Bonding</li>
                <li>Dental Bridges</li>  
                <li>Teeth Whitening</li>
                <li>Gum Recontouring</li>
              </ul>
              <img src={ whiteImage } className="whiteImg" alt="temp" width='25%'/>
            </div>
          </Slide>
        </article>
      </div>
    </>
  )
}

export default Service