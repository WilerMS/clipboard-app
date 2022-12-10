import React, { useState } from 'react'
import { Container } from './Dashboard.styled'
import Search from './../Search'
import EditMode from "./../EditMode"
import { useListContext } from './../../context/list.context'
import useFetch from '../../hooks/useFetch'
import DragList from './../DragList'

export const Dashboard = () => {

  const [textSearched, setTextSearched] = useState('')
  const [editing, setEditing] = useState(false)
  const { error, loading, postData } = useFetch('/templates')
  const { originalList, list, setList } = useListContext()

  const handleEditing = () => !error & !loading && setEditing(true)
  const handleConfirm = async () => {
    setEditing(true)
    await postData({})
    setEditing(false)
  }
  const handleCancel = () => {
    setList(originalList.map(a => ({ ...a })))
    setEditing(false)
  }

  return (
    <Container>
      <Search setTextSearched={setTextSearched} />
      <DragList
        textSearched={textSearched}
        list={list}
        editing={editing}
        error={error}
        loading={loading}
      />
      <EditMode
        setEditing={handleEditing}
        editing={editing}
        onSave={handleConfirm}
        onCancel={handleCancel}
      />
    </Container>
  )
}