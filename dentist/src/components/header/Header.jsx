import React from 'react'
import { Link } from 'react-router-dom'
import headerImg from "../../assets/images/smile1.jpg";
import { FiCalendar } from 'react-icons/fi'
import { BsTelephone } from 'react-icons/bs'
import {FaTooth } from 'react-icons/fa'
import {HiOutlineMail } from 'react-icons/hi'
import './header.scss'


const Header = () => {
  return (
    <section className="section-1 header__container section__padding">
      <main className="intro-page">
        {/* Heading */}
          <h1>Tillamook Family Dentistry</h1> 
          <h2>2503 Main Ave N, Tillamook, OR 97141
          </h2>

        {/* Office info */}
          <h4><FiCalendar className="office-info"/> MON - THURS: 9:00 AM - 5:00 PM <FaTooth className="office-info"/> AVAILABLE FOR EMERGENCIES <BsTelephone className="office-info"/> 503-815-1777 <HiOutlineMail className="office-info"/> </h4>
          
          <Link to="/contact" className="contact-button-home">
        <div>
            <span className="bg switch__bg"></span>
            <span className="base switch__border-color"></span>
            <span className="text">Send Email</span>
            </div> 
          </Link>
        

          <img src={ headerImg } className="headerImg" alt="Dentist office  logo" width='60%'/>

          
        
          <h3>Complete <br /> family dental <br /> care for <br /> healthy & beautiful smiles.</h3>
          


          {/* <img src={tempImage} alt="temp" width='55%' className="tempImg"/> */}
       

        {/* <Link to="/contact" className="contact-button-home">
          <div>
            <span className="bg switch__bg"></span>
            <span className="base switch__border-color"></span>
            <span className="text">Contact Us</span>
          </div>
        </Link> */}
      </main>
    
    </section>
  )
}

export default Header