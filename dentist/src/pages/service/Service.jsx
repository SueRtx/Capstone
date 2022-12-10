import React from 'react'
import Fade from 'react-reveal/Fade'
import './service.scss'


const Service = () => {
  return (
    <div className="section-service-wrapper section__padding">
    <article className="section-service-description">
    <h1>Services</h1> 
    <br />
    <Fade bottom>
      <h2> PREVENTIVE DENTISTRY</h2>
      <h3>Dental Checkups & Cleanings</h3>
              <p>
              Regardless of age, every patient should attend a dental checkup and cleaning once every six months. Dr. Ahn will have the opportunity to stop cavities, gum disease, and other oral health problems in their tracks, saving you from future headaches and toothaches! Our hygiene can also give your teeth a professional cleaning to remove cavity-causing plaque and  provide tips on maintaining pearly white teeth at home.
              </p>
            </Fade>

            <Fade bottom>
            <h2> GENERAL FAMILY DENTISTRY</h2>
              <li>Tooth-Colored Fillings</li>
              <li>Root Canals </li> 
              <li>Crowns / Implant Crowns</li>
              <li>Dental Bridges</li>  
              <li>Extractions</li>
              <li>Partials / Dentures</li>
              <li>Extractions</li>
            </Fade
            >
            <Fade bottom>
            <h2> COSMATIC DENTISTRY</h2>
              <li>Veneers</li>
              <li>Metal-Free Crowns</li> 
              <li>Cosmetic Bonding</li>
              <li>Dental Bridges</li>  
              <li>Teeth Whitening</li>
              <li>Gum Recontouring</li>
            </Fade>
    
    </article>
    
  </div>
  )
}

export default Service