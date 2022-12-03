import React from 'react'
import { Droppable, Draggable } from "react-beautiful-dnd"
import ListItem from '../ListItem'
import GeneralMessage from '../GeneralMessage'

const List = ({list, textSearched, editing, loading, error }) => {

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
        : <GeneralMessage text='No templates founds'/>
      }
    </div>
  )
}

export default List