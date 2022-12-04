import { useState } from 'react'

const useFetch = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async (url, options) => {
    try {
      setLoading(true)
      const res = await fetch(url, {
        ...options,
        headers: {
          ...options?.headers,
          'Content-Type': 'application/json',
          'Auth': localStorage.getItem('token'),
        },
      })
      const json = await res.json()
      setLoading(false)
      return json
    } catch (err) {
      setError(err)
      setLoading(false)
    }
  }
  return { error, loading, fetchData }
}

export default useFetch