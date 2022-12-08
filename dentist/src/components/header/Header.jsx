import React from 'react'
import { Link } from 'react-router-dom'
import tempImage from "../../assets/images/image1.png";
import './header.scss'


const Header = () => {
  return (
    <section className="section-1 header__container section__padding">
      <main className="intro-page">
        <div classname="container">
          <h1>Tillamook Family Dentistry</h1> 
          <h2>2503 Main Ave NTillamook, OR 97141</h2>
          <img src={tempImage} alt="temp image" width='40%'/>
        </div>

        
      </main>
    
    </section>
  )
}

export default Header