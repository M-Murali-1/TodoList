import React, { createContext } from 'react'

const StateContext = createContext();
export const StateChangeContext = ({children,handleStateChange}) => {
  return (
   <StateContext.Provider value={handleStateChange}>
    {children}
   </StateContext.Provider>
  )
}

export default StateContext