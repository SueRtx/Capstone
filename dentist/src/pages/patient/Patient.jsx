import React from 'react'
import Fade from 'react-reveal/Fade'
import forms from '../../assets/images/forms.pdf'
import './patient.scss'


const Patient = () => {
  return (
    <div className="section-patient-wrapper section__padding">
    <article className="section-patient-description">
    <h1>New Patients</h1> 
    <br />
    <Fade bottom>
              <p>
               Taking New Patients
              </p>
            </Fade>
            <Fade bottom>
              <p>
                Accept insurance
              </p>
            </Fade>
            <Fade bottom>
              <p>
             Make Appointment
              </p>
            </Fade>
            <Fade left>
              <a
                style={{ marginTop: '2rem' }}
                href={forms}
                download
                className="contact-button submit-button"
              >
                <div>
                  <span className="bg switch__bg"></span>
                  <span className="base switch__border-color"></span>
                  <span className="text">Download forms</span>
                </div>
              </a>
            </Fade>
    
    </article>
    
  </div>
  )
}

export default Patient