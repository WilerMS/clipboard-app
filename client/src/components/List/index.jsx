import React, { useEffect, useState } from 'react'
import { Droppable, Draggable } from "react-beautiful-dnd"
import { DragDropContext } from 'react-beautiful-dnd'
import ListItem from '../ListItem'
import GeneralMessage from '../GeneralMessage'

import { ListContainer } from './../AppList'
import Search from './../Search'
import EditMode from "./../EditMode"
import AddTemplate from "./../AddTemplate"
import { useListContext } from './../../context/list.context'
import useFetch from '../../hooks/useFetch'

const List = ({ list, textSearched, editing, loading, error }) => {
  if (loading) {
    return <div className="task-list">
      <GeneralMessage
        type='loading'
        text='Loading...'
      />
    </div>
  }

  if (error) {
    return <div className="task-list">
      <GeneralMessage
        type='error'
        text='There is an error. Try it later...'
      />
    </div>
  }

  return (
    <div className="task-list">
      {list?.length > 0
        ? <Droppable droppableId="droppable-1">
          {(provided, _) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {list
                .filter((item) => item.title.toLowerCase().includes(textSearched.toLowerCase()) || item.title === '')
                .map((item, i) => (
                  <Draggable
                    key={item.id}
                    draggableId={"draggable-" + item.id}
                    isDragDisabled={!editing}
                    index={i}
                  >
                    {(provided, snapshot) => (
                      <ListItem
                        provided={provided}
                        snapshot={snapshot}
                        item={item}
                        editing={editing}
                      />
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        : <GeneralMessage text='No templates founds' />
      }
    </div>
  )
}

export const Dashboard = () => {

  const [textSearched, setTextSearched] = useState('')
  const [editing, setEditing] = useState(false)
  const { error, loading, fetchData } = useFetch()

  const {
    originalList,
    setOriginalList,
    list,
    setList,
  } = useListContext()

  console.log({list})

  const handleEditing = () => !error & !loading && setEditing(true)
  const handleConfirm = () => {

    const fetchListData = async () => {
      await fetchData('http://localhost:5000/templates', {
        method: 'POST',
        body: JSON.stringify(list)
      })
    }
    fetchListData()

    //TODO: Error Handling
    setOriginalList(list.map(a => ({ ...a })))
    setEditing(false)
  }
  const handleCancel = () => {
    setList(originalList.map(a => ({ ...a })))
    setEditing(false)
  }

  // TODO: Check if this is the best way
  useEffect(() => {
    const fetchListData = async () => {
      const response = await fetchData('http://localhost:5000/templates', {})
      setList(response ? response : [])
      setOriginalList(response ? response : [])
    }
    fetchListData()
  }, [])

  const onDragEnd = (param) => {
    const srcIndex = param.source.index
    const desIndex = param.destination?.index
    let newList = list.filter(item => item.id !== list[srcIndex].id)
    newList.splice(desIndex, 0, list[srcIndex])
    newList = newList.map((item, index )=> ({...item, position: index + 1}))
    setList(newList)
  }


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ListContainer>
        <Search setTextSearched={setTextSearched} />
        <List
          textSearched={textSearched}
          list={list}
          editing={editing}
          error={error}
          loading={loading}
        />
        <div className='register'>
          {editing && <AddTemplate />}
        </div>
        <EditMode
          setEditing={handleEditing}
          editing={editing}
          onSave={handleConfirm}
          onCancel={handleCancel}
        />
      </ListContainer>
    </DragDropContext>
  )
}