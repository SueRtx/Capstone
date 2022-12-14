import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { useGLobalContext } from '../../hooks/contextAPI'

import { BsXLg } from 'react-icons/bs'
import './themetemplate.scss'

const ThemeTemplate = React.memo(() => {
  const {
    handleTheme,
    colorTheme,
  } = useGLobalContext()
  return (
    <>
        {/* sun & moon mode*/}
      <div className="mode">
        <h4>Color Mode</h4>

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
          <BsFillMoonFill className="moonColor" />
        </div>
      </div>
    </>
  )
})

export default ThemeTemplate
