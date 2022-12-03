import React, { useState } from "react";
import { ListContainer, AppContainer } from "./components/AppList"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { useListContext } from './context/list.context'
import Search from './components/Search'
import EditMode from "./components/EditMode";
import List from "./components/List";
import Register from "./components/Register";

const App = () => {

  const { list, setList } = useListContext()
  const [textSearched, setTextSearched] = useState('')
  const [editing, setEditing] = useState(false)

  const handleSaveList = () => {

  }

  const handleSave = () => {
    
  }

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
          <List 
            textSearched={textSearched}
            list={list}
            editing={editing}
          />
          <div className='register'>
            {editing && <Register />}
          </div>
          <EditMode 
            setEditing={setEditing}
            editing={editing}
          />
        </ListContainer>
      </DragDropContext>
    </AppContainer>
  );
};

export default App;
