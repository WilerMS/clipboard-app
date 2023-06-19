import { useEffect } from 'react'
import { useState } from 'react'
import { API_HOST } from '../constants/api'

const useContacts = (initialFetch = true) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [contacts, setContacts] = useState([])

  const fetchContacts = async (options) => {
    try {
      setLoading(true)
      const res = await fetch(`${API_HOST}/contacts`, {
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
    } catch (err) {
      console.log({err})
      setError(err)
    } finally {
      setLoading(false)
    }
  }

 /*  const postNotes = async (options) => {
    try {
      await fetchContacts({
        method: 'POST', 
        body: JSON.stringify(notes),
        ...options
      })
    } catch (err) {
      setError(err)
    }
  } */

  useEffect(() => {
    const fetchListData = async () => {
      const response = await fetchContacts({})
      setContacts(response)
    }
    initialFetch && fetchListData()
  }, [])


  return { contacts, error, loading, fetchContacts }
}

export default useContacts