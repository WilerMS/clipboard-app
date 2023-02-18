import { useState } from 'react'
import { API_HOST } from '../constants/api'
import { useAuthContext } from '../context/auth.context'

const useAuthentication = (url) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { setLoggedIn } = useAuthContext()

  const login = async (body) => {
    setLoading(true)
    try {
      const res = await fetch(`${API_HOST}/login`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await res.json()
      
      if (data.token) {
        localStorage.setItem('token', data.token)
        setLoggedIn(true)
      }
    } catch (err) {
      console.log({err})
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const register = async (body, options, callback) => {
    setLoading(true)
    try {
      const data = await fetch(`${API_HOST}/register`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      }) 
      callback(data)
    } catch (err) {
      console.log({err})
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return { error, loading, login, register }
}

export default useAuthentication