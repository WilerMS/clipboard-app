import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9191b0;
`

const ErrorMessage = ({text}) => {
  return (
    <Container>
      <h2>{text}</h2>
    </Container>
  )
}

export default ErrorMessage