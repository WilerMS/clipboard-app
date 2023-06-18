import React, { useState } from 'react'
import Logout from './components/Authentication/Logout'
import Categories from './components/Categories'
import { ClipBoard } from './pages/ClipBoardPage'
import { Notes } from './pages/NotesPage'
import Panel from './components/Panel'
import { ContextListProvider } from './context/list.context'
import { NotesContextProvider } from './context/notes.context'
import useLocalStorage from './hooks/useLocalStorage'

export const App = () => {

  const [appMode, setAppMode] = useLocalStorage('app-mode', 'clipboard')

  return (
    <>
      <Panel>
        <div className="panel-container">

        {appMode === 'clipboard' && 
          <ContextListProvider>
            <ClipBoard /> 
          </ContextListProvider>
        }
        {appMode === 'notes' &&
          <NotesContextProvider>
            <Notes />
          </NotesContextProvider>
        }
        {/* {appMode === 'contacts' && <Contacts />} */}
        </div>
        <Categories
          active={appMode}
          handleClick={setAppMode}
        />
      </Panel>
      
    </>
  )
}
