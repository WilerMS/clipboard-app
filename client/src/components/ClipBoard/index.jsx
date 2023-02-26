import React, { useState } from 'react'
import Search from '../Search'
import EditMode from "../EditMode"
import { useListContext } from '../../context/list.context'
import useTemplates from '../../hooks/useTemplates'
import DragList from '../DragList'

export const ClipBoard = () => {

  const [textSearched, setTextSearched] = useState('')
  const [editing, setEditing] = useState(false)
  const { error, loading, postData } = useTemplates('/templates')
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
  const handleAddEntry = () => {
    const higherID = list.reduce((acc, curr) => acc > curr.id ? acc : curr.id, 0)
    setList([
      ...list,
      {
        id: higherID + 1,
        title: '',
        position: list.length + 1
      }
    ])
  }

  return (
    <>
      <Search setTextSearched={setTextSearched} />
      <DragList
        textSearched={textSearched}
        list={list}
        editing={editing}
        error={error}
        loading={loading}
      />
      <EditMode
        onAdd={handleAddEntry}
        setEditing={handleEditing}
        editing={editing}
        onSave={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  )
}