import React, { createContext, useContext, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

const ListContext = createContext()

export const ContextListProvider = ({ children }) => {

  const [list, setList] = useState([])
  const [originalList, setOriginalList] = useState([])

  const onDragEnd = (param) => {
    const srcIndex = param.source.index
    const desIndex = param.destination?.index
    let newList = list.filter(item => item.id !== list[srcIndex].id)
    newList.splice(desIndex, 0, list[srcIndex])
    newList = newList.map((item, index )=> ({...item, position: index + 1}))
    setList(newList)
  }

  return (
    <ListContext.Provider
      value={{ list, setList, originalList, setOriginalList }}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        {children}
      </DragDropContext>
    </ListContext.Provider>
  )
}

export const useListContext = () => useContext(ListContext)