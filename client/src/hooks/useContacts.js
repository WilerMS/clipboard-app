import { useEffect, useState } from 'react'
import { API_HOST } from '../constants/api'

const useContacts = (initialFetch = true) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [contacts, setContacts] = useState([])

  const fetchContacts = async (options) => {
    try {
      setLoading(true)
      const res = await fetch(`${API_HOST}/contacts${options.url ?? ''}`, {
        ...options,
        headers: {
          ...options?.headers,
          'Content-Type': 'application/json',
          Authorization: window.localStorage.getItem('token') ?? undefined
        }
      })
      const json = await res.json()
      if (json.error) throw new Error(json.message)
      return json
    } catch (err) {
      console.log({ err })
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const getAllContacts = async () => {
    const response = await fetchContacts({})
    setContacts(response)
  }

  const postContact = async (data, options) => {
    try {
      await fetchContacts({
        method: 'POST',
        body: JSON.stringify(data),
        ...options
      })
      getAllContacts()
    } catch (err) {
      setError(err)
    }
  }

  const updateContact = async (data, options) => {
    try {
      await fetchContacts({
        url: `/${data.id}`,
        method: 'PUT',
        body: JSON.stringify(data),
        ...options
      })
      getAllContacts()
    } catch (err) {
      setError(err)
    }
  }

  const deleteContact = async (id) => {
    try {
      await fetchContacts({
        url: `/${id}`,
        method: 'DELETE'
      })
      getAllContacts()
    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    const fetchListData = async () => {
      const response = await fetchContacts({})
      setContacts(response)
    }
    initialFetch && fetchListData()
  }, [])

  return { contacts, error, loading, fetchContacts, postContact, deleteContact, updateContact }
}

export default useContacts
