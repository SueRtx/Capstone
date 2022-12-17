import React from 'react'
import { Link } from 'react-router-dom'
import headerImg from "../images/he-smile.jpg";
import toothImg from "../images/he-tooth.png";
import { BsFillCalendarFill, BsFillTelephoneFill } from 'react-icons/bs'
import { FaTooth } from 'react-icons/fa'
import { AiTwotoneMail } from 'react-icons/ai'
import { ImAddressBook } from 'react-icons/im'
import './header.scss'

const Header = () => {
  return (
    <>
      <section className="section-1 header__container section__padding">
        <main className="intro-page">
          <h1>Tillamook Family Dentistry</h1> 
          {/* Office info */}
          <h2><ImAddressBook className="adress-info"/>2503 Main Ave N, Tillamook, OR 97141 <BsFillTelephoneFill className=".adress-info"/> 503-815-1777 
          </h2> 

          <h4><BsFillCalendarFill className="office-info"/> Mon - Thurs: 9:00 AM - 5:00 PM <FaTooth className="office-info"/> AVAILABLE FOR EMERGENCIES <AiTwotoneMail className="office-info"/>tillamookfamilydentistry@yahoo.com</h4>

          {/* contact us */}
          <Link to="/contact" className="contact-button-home">
            <div>
              <span className="bg bt-hover"></span>
              <span className="base border-color"></span>
              <span className="text">CONTACT US</span>
            </div> 
          </Link>

          <img src={ headerImg } className="headerImg" alt="Smiling family" width='62%'/>

          {/* tooth side box */}
          <div className='toothSideBox'>
            <img src={ toothImg } className="toothImg" alt="Dentist office  logo" width='100%' />

            <h3>COMPLETE <br /> FAMILY DENTAL CARE<br /> FOR HEALTHY AND  <br />BEAUTIFUL <br />SMILES</h3>
          </div>
        </main>
      </section>
    </> 
  )
}

export default Header