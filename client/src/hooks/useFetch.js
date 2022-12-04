import { useState } from 'react'

const useFetch = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = (url, options) => {
    setLoading(true)
    return fetch(url, {
      ...options,
      headers: {
        ...options?.headers,
        'Content-Type': 'application/json',
        'Auth': localStorage.getItem('token'),
      },
    })
    .then(res => res.json())
    .then(json => {
      console.log({loading})
      if (json.error) {
        throw new Error(json.message)
      }
      return json
    })
    .catch(err => {
      console.log({err})
      setError(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }
  return { error, loading, fetchData }
}

export default useFetch