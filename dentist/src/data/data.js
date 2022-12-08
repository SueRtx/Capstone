import React from 'react'

// react icons
import { FiGrid } from 'react-icons/fi'
import { TbDental } from 'react-icons/tb'
import { BsPersonLinesFill } from 'react-icons/bs'
import { RiContactsLine } from 'react-icons/ri'
import {  GrTwitter, GrInstagram } from 'react-icons/gr'

// sidebar menu list and icons
const sideBarMenu = [
  {
    text: 'Home',
    icon: <FiGrid className="link-icon" />,
    url: '/',
  },
  {
    text: 'About',
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
]

// social media icons and url
const socialIcons = [
  {
    icon: <GrTwitter className="icon switch__color" />,
    url: 'https://twitter.com/tillamook',
  },
  {
    icon: <GrInstagram className="icon switch__color" />,
    url: 'https://www.instagram.com/tillamook',
  },
]

export { sideBarMenu, socialIcons }
