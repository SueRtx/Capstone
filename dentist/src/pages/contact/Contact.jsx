import React from 'react'
import Fade from 'react-reveal/Fade'
import './contact.scss'


const Contact = () => {
  return (
    <div className="section-service-wrapper section__padding">
    <article className="section-service-description">
    <h1>Contacts</h1> 
    <br />
    <Fade bottom>
      <p>
        Name
      </p>
    
      <p>
        Email
      </p>
    
      <p>
      Message
      </p>

      <p>
    google map
      </p>

    </Fade>
    
    </article>
    
  </div>
  )
}

export default Contact