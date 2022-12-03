import React, { useEffect, useState } from "react";
import { ListContainer, AppContainer } from "./components/AppList"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { useListContext } from './context/list.context'
import Search from './components/Search'
import EditMode from "./components/EditMode"
import List from "./components/List"
import Register from "./components/Register"
import useFetch from "./hooks/useFetch"

const App = () => {

  const [textSearched, setTextSearched] = useState('')
  const [editing, setEditing] = useState(false)
  const { error, loading, fetchData } = useFetch()
  const { 
    originalList,
    setOriginalList,
    list,
    setList,
  } = useListContext()

  const handleEditing = () => !loading && setEditing(true)
  const handleConfirm = () => {
    //TODO: Error Handling
    setOriginalList(list.map(a => ({...a})))
    setEditing(false)
  }
  const handleCancel = () => {
    setList(originalList.map(a => ({...a})))
    setEditing(false)
  }

  // TODO: Check if this is the best way
  useEffect(() => {
    const fetchListData = async () => {
      const response = await fetchData('http://localhost:5000/templates')
      setList(response)
    }
    fetchListData()
  }, [])

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
            loading={loading}
          />
          <div className='register'>
            {editing && <Register />}
          </div>
          <EditMode
            setEditing={handleEditing}
            editing={editing}
            onSave={handleConfirm}
            onCancel={handleCancel}
          />
        </ListContainer>
      </DragDropContext>
    </AppContainer>
  );
};

export default App;
