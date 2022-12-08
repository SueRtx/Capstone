import React, { useReducer } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { sideBarMenu, socialIcons } from '../../data/data'

import { reducer } from '../../hooks/useReducer'
import logoImage from "../../assets/images/logo.png";

import './sidebar.scss'

const defaultOptions = {
  showAside1: false,
  openCloseNav1: false,
}

const Sidebar = React.memo(() => {
  // dispatch reducer functionality
  const [state, dispatch] = useReducer(reducer, defaultOptions)
  return (
    <>
      
      <aside
        className={`${state.openCloseNav1 ? 'aside open-sidebar' : 'aside'} ${
          state.showAside1 ? 'aside show-asideBar' : 'aside'
        }`}
      >
        <div className="aside-wrapper">
         

{/* logo  link */}
          <Link
            className="logo-section"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              lineHeight: '4',
            }}
            to="/"
          >
            <img src={logoImage} alt="Dentist office  logo" width='90%'/>

            <span className="iconColor" style={{ fontSize: '0.9rem' }}>
            (503)815-1777
            </span>
          </Link>

          <ul className="side-link">
            {sideBarMenu.map((link, index) => {
              const { text, icon, url } = link
              return (
                <li key={index}>
                  <NavLink
                    onClick={() => dispatch({ type: 'CLOSE_NAVBAR' })}
                    className={({ isActive }) => {
                      return isActive ? 'nav__links active-links' : 'nav__links'
                    }}
                    to={url}
                  >
                    {icon}
                    {text}
                  </NavLink>
                </li>
              )
            })}
          </ul>
          
          <div className="social-icon">
            {socialIcons.map((icons, index) => {
              const { icon, url } = icons
              return (
                <a href={url} key={index}>
                  {icon}
                </a>
              )
            })}
          </div>
        </div>
      </aside>
    </>
  )
})


export default Sidebar
