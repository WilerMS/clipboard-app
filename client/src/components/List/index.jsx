import React from 'react'
import { Droppable, Draggable } from "react-beautiful-dnd"
import ListItem from '../ListItem'
import NoItemsFound from '../NoItemsFound'

const List = ({list, textSearched, editing }) => {
  return (
    <div className="task-list">
      {list.length > 0
        ? <Droppable droppableId="droppable-1">
          {(provided, _) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {list
                .filter((item) => item.title.toLowerCase().includes(textSearched.toLowerCase()) || item.title === '')
                .map((item, i) => (
                  <Draggable
                    key={item.id}
                    draggableId={"draggable-" + item.id}
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
        : <NoItemsFound />
      }
    </div>
  )
}

export default List