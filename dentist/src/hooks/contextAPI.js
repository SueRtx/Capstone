import React, { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

const AppProvider = React.memo(({ children }) => {
  const [colorTheme, setColorTheme] = useState('dark-mode')
  const [isTemplateOpen, setIsTemplateOpen] = useState(false)
  const [changeTemp, setChangeTemp] = useState('template-1')

  // dark and light mode functionality
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme) {
      setColorTheme(currentTheme)
    }
  }, [])

  const handleTheme = (theme) => {
    setColorTheme(theme)
    localStorage.setItem('theme', theme)
  }

  // Theme template functionality
  useEffect(() => {
    const currentTheme = localStorage.getItem('temp')
    setChangeTemp(currentTheme)
  }, [])

  const handleTemp = (temp) => {
    setChangeTemp(temp)
    localStorage.setItem('temp', temp)
  }

  // open and close sidebar functionality
  const openTemplate = () => {
    setIsTemplateOpen(true)
  }
  const closeTemplate = () => {
    setIsTemplateOpen(false)
  }
  
  return (
    <AppContext.Provider
      value={{
        changeTemp,
        setChangeTemp,
        handleTemp,
        isTemplateOpen,
        setIsTemplateOpen,
        closeTemplate,
        openTemplate,
        handleTheme,
        colorTheme,
      }}
    >
      <div
        className={`wrapper ${
          colorTheme === 'dark-mode' ? 'dark-mode' : 'light-mode'
        }`}
        id={`${changeTemp}`}
      >
        {children}
      </div>
    </AppContext.Provider>
  )
})

const useGLobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGLobalContext }










// import React, { createContext, useContext, useEffect, useState } from 'react'

// const AppContext = createContext()

// const AppProvider = ({ children }) => {
//   return ( 
//     <AppContext.Provider value="Hello">
//       { children }
//     </AppContext.Provider>
//   )
// }

// const useGLobalContext = () => {
//   return useContext(AppContext)
// }
  
//   export { AppProvider, useGLobalContext }