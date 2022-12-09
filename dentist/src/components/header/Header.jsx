import React from 'react'
// import { Link } from 'react-router-dom'
import tempImage from "../../assets/images/image2.png";
import tempImage2 from "../../assets/images/tooth2.png";

import './header.scss'


const Header = () => {

  


  return (
    <section className="section-1 header__container section__padding">
      <main className="intro-page">
        <div>

     <div className='letterT-Img'>
      <img src={tempImage} alt="temp pic" width='12%' />
      </div>
      {/* <img src={tempImage} alt="temp pic" width='11%' /> */}

          <h1>illamook Family Dentistry</h1>
           
          <h2>2503 Main Ave N * Tillamook, OR 97141</h2>

          <img src={tempImage2} alt="temp pic" width='28%' />
          <img src={tempImage2} alt="temp pic" width='28%' />
          <img src={tempImage2} alt="temp pic" width='28%' />

          {/* <div className='tooth-Img'>
          <img src={tempImage2} alt="temp pic" width='40%' />
          </div> */}
          </div>

        
      </main>
    
    </section>
  )
}

export default Header