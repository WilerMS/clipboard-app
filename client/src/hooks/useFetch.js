import { useState } from 'react'
import { API_HOST } from '../constants/api'

const useFetch = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async (url, options) => {
    try {
      setLoading(true)
      const res = await fetch(`${API_HOST}${url}`, {
        ...options,
        headers: {
          ...options?.headers,
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token') ?? undefined,
        },
      })
      const json = await res.json()
      if (json.error) throw new Error(json.message)
      return json
    } 
    catch (err) {
      console.log({err})
      setError(err)
    }
    finally {
      setLoading(false)
    }
  }
  return { error, loading, fetchData }
}

export default useFetch