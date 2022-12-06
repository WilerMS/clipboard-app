import React from "react"
import {  AppContainer } from './components/AppList'
import { Dashboard } from "./components/List"
import Authentication from './components/Authentication'
import { useAuthContext } from './context/auth.context'
import Logout from './components/Authentication/Logout'

const App = () => {

  const { loggedIn } = useAuthContext()
  
  return (
    <AppContainer className="App">
      {loggedIn
        ? <Dashboard />
        : <Authentication />
      }
      <Logout />
    </AppContainer>
  );
};

export default App;
