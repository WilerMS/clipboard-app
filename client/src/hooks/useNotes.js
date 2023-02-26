import { useEffect } from 'react'
import { useState } from 'react'
import { API_HOST } from '../constants/api'
import { initialNotes } from '../constants/notes'
import { useNotesContext } from '../context/notes.context'

const useNotes = (initialFetch = true) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { notes, setNotes } = useNotesContext()

  const fetchNotes = async (options) => {
    try {
      setLoading(true)
      const res = await fetch(`${API_HOST}/notes`, {
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

  const postNotes = async (options) => {
    try {
      await fetchNotes({
        method: 'POST', 
        body: JSON.stringify(notes),
        ...options
      })
    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    const fetchListData = async () => {
      const response = await fetchNotes({})
      
      console.log({ response })
      setNotes(response)
    }
    initialFetch && fetchListData()
  }, [])


  return { notes, error, loading, fetchNotes, postNotes }
}

export default useNotes