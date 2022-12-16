import React from 'react'
import Fade from 'react-reveal/Fade'
import forms from '../../images/forms.pdf'
import './patient.scss'

const Patient = () => {
  return (
    <>
      <div className="section-patient-wrapper section__padding">
        <h1>Patients</h1> 
        <article className="section-patient-description">   
          <br />
          <Fade bottom>
            <h2>
              New patients are always welcome! <br />Please call us at (503) 815-1777.
            </h2>
          </Fade>

          <Fade bottom>
            <h3>Regardless of age, every patient should attend a dental checkup and cleaning once every six months. Dr. Ahn will have the opportunity to stop cavities, gum disease, and other oral health problems in their tracks, saving you from future headaches and toothaches! Our hygiene can also give your teeth a professional cleaning to remove cavity-causing plaque and  provide tips on maintaining pearly white teeth at home.</h3>
          </Fade>

          <Fade left>           
            <a
              style={{ marginTop: '2rem' }}
              href={forms}
              download
              className=" submit-button"
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
    </>
  )
}

export default Patient