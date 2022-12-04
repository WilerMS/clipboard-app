import React, { createContext, useContext, useState } from 'react'

export const getCookie = (name) => {
  const cookieArr = document.cookie.split(";")
  const cookie = cookieArr
    .map((cookie) => {
      return cookie.split('=')
    })
    .filter(([coockieName]) => coockieName.trim() === name)
  return cookie.length ? cookie[0][1] : null
}

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