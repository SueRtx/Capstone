import React, { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  return ( 
    <AppContext.Provider value="Hello">
      { children }
    </AppContext.Provider>
  )
}

const useGLobalContext = () => {
  return useContext(AppContext)
}
  
  export { AppProvider, useGLobalContext }