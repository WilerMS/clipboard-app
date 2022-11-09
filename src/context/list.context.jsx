import React, { createContext, useContext } from 'react'
import useLocalStorage from './../hooks/useLocalStorage'
import { initialList } from './../constants/initialList'

const ListContext = createContext()

export const ContextListProvider = ({ children }) => {

  const [list, setList] = useLocalStorage('list', initialList)

  return (
    <ListContext.Provider
      value={{ list, setList }}
    >
      {children}
    </ListContext.Provider>
  )
}

export const useListContext = () => useContext(ListContext)