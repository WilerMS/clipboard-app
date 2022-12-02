import React from 'react'
import { FiCopy } from 'react-icons/fi'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: end;
`

const Coppier = ({ item }) => {

  const handleClick = () => {
    navigator.clipboard.writeText(item.title);
  }

  return (
    <>
      <Container onClick={handleClick}>
        <FiCopy />
      </Container>
    </>
  )
}

export default Coppier