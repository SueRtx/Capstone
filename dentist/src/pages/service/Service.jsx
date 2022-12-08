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
              <p>
                General Dentistry
              </p>
            </Fade>
            <Fade bottom>
              <p>
                Dentures & Crowns
              </p>
            </Fade>
            <Fade bottom>
              <p>
              Cosmatic Dentistry
              </p>
            </Fade>
    
    </article>
    
  </div>
  )
}

export default Service