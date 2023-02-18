import React, { useState } from 'react'
import Logout from './components/Authentication/Logout'
import Categories from './components/Categories'
import { ClipBoard } from './components/ClipBoard'
import { Notes } from './components/Notes'
import Panel from './components/Panel'
import useLocalStorage from './hooks/useLocalStorage'

export const App = () => {

  const [appMode, setAppMode] = useLocalStorage('app-mode', 'clipboard')
  

  return (
    <>
      <Panel>
        {appMode === 'clipboard' && <ClipBoard />}
        {appMode === 'notes' && <Notes />}
        {/* {appMode === 'contacts' && <Contacts />} */}
      </Panel>
      <Logout />
      <Categories
        active={appMode}
        handleClick={setAppMode}
      />
    </>
  )
}
