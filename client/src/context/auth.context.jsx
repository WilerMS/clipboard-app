import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const ContextAuthProvider = ({ children }) => {

  const token = localStorage.getItem('token')

  const [loggedIn, setLoggedIn] = useState(Boolean(token))

  return (
    <AuthContext.Provider
      value={{ loggedIn, setLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)