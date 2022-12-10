import React from 'react'

// react icons
import { FiGrid } from 'react-icons/fi'
import { TbDental } from 'react-icons/tb'
import { BsPersonLinesFill } from 'react-icons/bs'
import { RiContactsLine } from 'react-icons/ri'
import { AiOutlineForm } from 'react-icons/ai'
import {  GrTwitter, GrInstagram } from 'react-icons/gr'

// sidebar menu list and icons
const sideBarMenu = [
  {
    text: 'Home',
    icon: <FiGrid className="link-icon" />,
    url: '/',
  },
  {
    text: 'About Us',
    icon: <BsPersonLinesFill className="link-icon" />,
    url: '/about',
  },
  {
    text: 'Services',
    icon: <TbDental className="link-icon" />,
    url: '/service',
  },
  {
    text: 'Contacts',
    icon: <RiContactsLine className="link-icon" />,
    url: '/contact',
  },
  {
    text: 'Patients',
    icon: <AiOutlineForm className="link-icon" />,
    url: '/patient',
  },
]

// social media icons and url
const socialIcons = [
  {
    icon: <GrTwitter className="icon iconColor" />,
    url: 'https://twitter.com/tillamook',
  },
  {
    icon: <GrInstagram className="icon iconColor" />,
    url: 'https://www.instagram.com/tillamook',
  },
]

export { sideBarMenu, socialIcons }
