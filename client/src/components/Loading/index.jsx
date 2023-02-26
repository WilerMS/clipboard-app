import React from 'react'
import { FiLoader } from 'react-icons/fi'
import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

`

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .loader {
    animation: ${loading} infinite 10s linear;
  }

  span {
    margin-top: 30px;
    margin-bottom: 70px;
    font-size: 2rem;
  }

  svg {
    font-size: 10rem;
  }
`

const Loading = () => {
  return (
    <Container>
      <FiLoader className='loader'/>
      <span>Loading...</span>
    </Container>
  )
}

export default Loading