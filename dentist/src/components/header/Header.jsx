import React from 'react'
// import { Link } from 'react-router-dom'
import tempImage from "../../assets/images/image2.png";
import './header.scss'


const Header = () => {
  return (
    <section className="section-1 header__container section__padding">
      <main className="intro-page">
        <div>

     <div className='letterT'>
      <img src={tempImage} alt="temp pic" width='12%' />
      </div>
      {/* <img src={tempImage} alt="temp pic" width='11%' /> */}

          <h1>illamook Family Dentistry</h1>
           
          <h2>2503 Main Ave N * Tillamook, OR 97141</h2>
          {/* <img src={tempImage} alt="temp pic" width='40%' /> */}
          
          </div>

        
      </main>
    
    </section>
  )
}

export default Header