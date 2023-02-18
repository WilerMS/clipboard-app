import { useEffect } from 'react'
import { useState } from 'react'
import { API_HOST } from '../constants/api'
import { useListContext } from '../context/list.context'

const useTemplates = (url, initialFetch = true) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { setOriginalList, setList, list } = useListContext()

  const fetchData = async (options) => {
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

  const postData = async (options) => {
    try {
      await fetchData({
        method: 'POST', 
        body: JSON.stringify(list),
        ...options
      })
      setOriginalList(list.map(a => ({ ...a })))
    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    const fetchListData = async () => {
      const response = await fetchData({})
      setList(response ? response : [])
      setOriginalList(response ? response : [])
    }
    initialFetch && fetchListData()
  }, [])


  return { error, loading, fetchData, postData }
}

export default useTemplates