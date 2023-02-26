import React from "react"
import Authentication from './components/Authentication'
import { useAuthContext } from './context/auth.context'
import styled from 'styled-components'
import { App } from "./App"

const Main = () => {

  const { loggedIn } = useAuthContext()
  
  return (
    <AppContainer className="App">
      {loggedIn
        ? <App />
        : <Authentication />
      }
    </AppContainer>
  );
};


export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  @media only screen and (max-width: 550px) {
    align-items: flex-start;
    
  }
`

export default Main;
