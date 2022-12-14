import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { BsMoonStars, BsFillSunFill } from 'react-icons/bs'
import { useGLobalContext } from '../../hooks/contextAPI'

import { BsXLg } from 'react-icons/bs'
import './themetemplate.scss'

const ThemeTemplate = React.memo(() => {
  const {
    isTemplateOpen,
    openTemplate,
    handleTheme,
    closeTemplate,
    colorTheme,
  } = useGLobalContext()


  return (
    <>
    {/* setting icon */}
      <div className="theme-icon-wrapper" onClick={openTemplate}>
        <FiSettings className="theme-icon switch__color" />
      </div>
      
      {/* theme-wrapper */}
      <div
        className={`${
          isTemplateOpen
            ? 'theme-wrapper show-template'
            : 'theme-wrapper hide-template'
        }`}
      >

      {/* color mode box */}
        <div className="theme-header">
          <span>Color Mode</span>
          <span>
            <BsXLg
              onClick={closeTemplate}
              className="close-template switch__color"
            />
          </span>
        </div>

        {/* sun & moon mode*/}
        <div className="mode">
          <div
            className={`${colorTheme === 'light-mode' ? 'active-mode' : ''}`}
            onClick={() => handleTheme('light-mode')}
          >
            <BsFillSunFill className="sunColor" />
          </div>
          <div
            className={`${colorTheme === 'dark-mode' ? 'active-mode' : ''}`}
            onClick={() => handleTheme('dark-mode')}
          >
            <BsMoonStars className="moonColor" />
          </div>
        </div>
        
        
      </div>
    </>
  )
})

export default ThemeTemplate
