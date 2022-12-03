import React, { createContext, useContext, useState } from 'react'

const ListContext = createContext()

export const ContextListProvider = ({ children }) => {

  const [list, setList] = useState([])
  const [originalList, setOriginalList] = useState([])

  return (
    <ListContext.Provider
      value={{ list, setList, originalList, setOriginalList }}
    >
      {children}
    </ListContext.Provider>
  )
}

export const useListContext = () => useContext(ListContext)