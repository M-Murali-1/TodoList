import React, { createContext } from 'react'

const StateContext = createContext();
export const StateChangeContext = ({children,projects,setProjects}) => {
  return (
   <StateContext.Provider value={{projects,setProjects}}>
    {children}
   </StateContext.Provider>
  )
}

export default StateContext