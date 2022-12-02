import React, { useState } from "react";
import { ListContainer, ListItem, AppContainer } from "./components/AppList"
import { DragHandle } from "./components/DragHandle"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import Deleter from './components/Deleter'
import Coppier from './components/Coppier'
import NameRewitteable from './components/NameRewritteable'
import Register from './components/Register'
import { useListContext } from './context/list.context'
import Search from './components/Search'
import NoItemsFound from './components/NoItemsFound'

const App = () => {

  const { list, setList } = useListContext()
  const [textSearched, setTextSearched] = useState('')

  const onDragEnd = (param) => {
    const srcIndex = param.source.index
    const desIndex = param.destination?.index
    let newList = list.filter(item => item.id !== list[srcIndex].id)
    newList.splice(desIndex, 0, list[srcIndex])
    setList(newList)
  }

  return (
    <AppContainer className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        <ListContainer>
          <Search setTextSearched={setTextSearched} />
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
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                style={{
                                  ...provided.draggableProps.style,
                                  boxShadow: snapshot.isDragging
                                    ? "0 0 .2rem #0000004e"
                                    : "none",
                                }}
                              >
                                <DragHandle {...provided.dragHandleProps} />
                                <NameRewitteable id={item.id} />
                                <Coppier item={item} />
                                <Deleter id={item.id} />
                              </ListItem>
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
          <Register />
        </ListContainer>
      </DragDropContext>
    </AppContainer>
  );
};

export default App;
