import React from 'react'
import { Droppable, Draggable } from "react-beautiful-dnd"
import styled from 'styled-components'
import DragItem from '../DragItem'
import GeneralMessage from '../GeneralMessage'

const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 2rem 2rem 2rem;

  > div {
    width: 100%;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #00000043;
    border-radius: 3px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #00000092;
  }
`

const List = ({ list, textSearched, editing, loading, error }) => {
  if (loading) {
    return (
    <Container className="task-list">
      <GeneralMessage
        type='loading'
        text='Loading...'
      />
    </Container>)
  }

  if (error) {
    return <Container className="task-list">
      <GeneralMessage
        type='error'
        text={error.message}
      />
    </Container>
  }

  return (
    <Container className="task-list">
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
                      <DragItem
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
        : <GeneralMessage text='No templates found' />
      }
    </Container>
  )
}

export default List