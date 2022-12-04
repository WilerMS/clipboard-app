import React, { useState } from "react"
import {  AppContainer } from './components/AppList'
import { Dashboard } from "./components/List"
import Authentication from './components/Authentication'
import {ContextAuthProvider, useAuthContext} from './context/auth.context'

const App = () => {

  const {loggedIn, setLoggedIn} = useAuthContext()

  console.log({loggedIn})

  return (
    <AppContainer className="App">
      {loggedIn
        ? <Dashboard />
        : <Authentication />
      }
    </AppContainer>
  );
};

export default App;
