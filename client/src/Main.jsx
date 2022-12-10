import React from "react"
import { Dashboard } from "./components/Dashboard"
import Authentication from './components/Authentication'
import { useAuthContext } from './context/auth.context'
import Logout from './components/Authentication/Logout'
import styled from 'styled-components'

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


export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`

export default App;
