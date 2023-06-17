import React, { useState } from 'react'
import Logout from './components/Authentication/Logout'
import Categories from './components/Categories'
import { ClipBoard } from './components/ClipBoard'
import { Notes } from './components/Notes'
import Panel from './components/Panel'
import { ContextListProvider } from './context/list.context'
import { NotesContextProvider } from './context/notes.context'
import useLocalStorage from './hooks/useLocalStorage'

export const App = () => {

  const [appMode, setAppMode] = useLocalStorage('app-mode', 'clipboard')

  return (
    <>
      <Panel>
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
      </Panel>
      <Categories
        active={appMode}
        handleClick={setAppMode}
      />
    </>
  )
}
