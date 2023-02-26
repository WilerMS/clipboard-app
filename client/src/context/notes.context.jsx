import React, { createContext, useContext, useState } from 'react'

const NotesContext = createContext()

export const NotesContextProvider = ({ children }) => {

  const [notes, setNotes] = useState(null)

  return (
    <NotesContext.Provider
      value={{ notes, setNotes }}
    >
      {children}
    </NotesContext.Provider>
  )
}

export const useNotesContext = () => useContext(NotesContext)