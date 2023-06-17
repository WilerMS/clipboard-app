import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  max-width: 550px;
  height: 660px;
  border-radius: 0.2rem;
  box-shadow: 0.1rem 0.1rem 0.4rem #0000003b;
  background: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 550px) {
    height: calc(100% - 120px);
    
  }
`

const Panel = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Panel