import React from 'react'
import { Link } from 'react-router-dom'
import headerImg from "../../assets/images/smile1.jpg";
import { BsFillCalendarFill, BsFillTelephoneFill } from 'react-icons/bs'
import {FaTooth } from 'react-icons/fa'
import {AiTwotoneMail } from 'react-icons/ai'
import { ImAddressBook } from 'react-icons/im'
import './header.scss'


const Header = () => {
  return (
    <section className="section-1 header__container section__padding">
      <main className="intro-page">
        {/* Heading */}
          <h1>Tillamook Family Dentistry</h1> 
          <h2><ImAddressBook className="adress-info"/>2503 Main Ave N, Tillamook, OR 97141 <BsFillTelephoneFill className=".office-info"/> 503-815-1777 
          </h2>

        {/* Office info */}
          <h4><BsFillCalendarFill className="office-info"/> Mon - Thurs: 9:00 AM - 5:00 PM <FaTooth className="office-info"/> AVAILABLE FOR EMERGENCIES <AiTwotoneMail className="office-info"/>tillamookfamilydentistry@yahoo.com</h4>
          
          <Link to="/contact" className="contact-button-home">
        <div>
            <span className="bg switch__bg"></span>
            <span className="base switch__border-color"></span>
            <span className="text">CONTACT US</span>
            </div> 
          </Link>
        

          <img src={ headerImg } className="headerImg" alt="Dentist office  logo" width='60%'/>
          <h3>Complete <br /> family dental <br /> care for <br /> healthy & beautiful smiles.</h3>
          
          
      </main>
    
    </section>
  )
}

export default Header