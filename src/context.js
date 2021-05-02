import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubMenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openSubmenu = (text, coordinates) => {
    setLocation(coordinates, )
    setIsSubMenuOpen(true)
  }

  const closeSubmenu = () => {
    setIsSubMenuOpen(false)
  }
  return <AppContext.Provider value={{
    isSidebarOpen, 
    isSubmenuOpen,
    openSidebar, 
    closeSidebar, 
    openSubmenu, 
    closeSubmenu,
    location
  }}>
    {children}
  </AppContext.Provider>
}


export const useGlobalContext = () => {
  return useContext(AppContext)
}
