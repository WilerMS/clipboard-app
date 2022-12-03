import React from 'react'
import styled from 'styled-components'

const colors = {
  loading: '#9191b0',
  error: 'red',
  info: '#9191b0',
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => colors[props.type]};
`

const GeneralMessage = ({text, type}) => {
  return (
    <Container type={type}>
      <h2>{text}</h2>
    </Container>
  )
}

export default GeneralMessage