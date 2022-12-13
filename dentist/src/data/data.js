import React from 'react'

// react icons
import { AiFillHome } from 'react-icons/ai'
import { MdMedicalServices, MdEmail } from 'react-icons/md'
import { RiContactsFill } from 'react-icons/ri'
import { IoMdDownload } from 'react-icons/io'
import { BsLinkedin, BsImageFill } from 'react-icons/bs'
import { RiTwitterFill, RiInstagramFill } from 'react-icons/ri'

// sidebar menu list and icons
const sideBarMenu = [
  {
    text: 'HOME',
    icon: <AiFillHome className="link-icon" />,
    url: '/',
  },
  {
    text: 'ABOUT',
    icon: <RiContactsFill className="link-icon" />,
    url: '/about',
  },
  {
    text: 'GALLERY',
    icon: <BsImageFill className="link-icon" />,
    url: '/gallery',
  },
  {
    text: 'SERVICES',
    icon: <MdMedicalServices className="link-icon" />,
    url: '/service',
  },
  {
    text: 'CONTACTS',
    icon: <MdEmail className="link-icon" />,
    url: '/contact',
  },
  {
    text: 'PATIENTS',
    icon: <IoMdDownload className="link-icon" />,
    url: '/patient',
  },
]

// social media icons and url
const socialIcons = [
  {
    icon: <RiTwitterFill className="icon" />,
    url: 'https://twitter.com/tillamook',
  },
  {
    icon: <RiInstagramFill className="icon" />,
    url: 'https://www.instagram.com/tillamook',
  },
  {
    icon: <BsLinkedin className="icon" />,
    url: 'https://www.linkedin.com/tillamook',
  },
]

export { sideBarMenu, socialIcons }
