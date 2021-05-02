import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubMenuOpen] = useState(true)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openSubmenu = () => {
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
    closeSubmenu
  }}>
    {children}
  </AppContext.Provider>
}


export const useGlobalContext = () => {
  return useContext(AppContext)
}
