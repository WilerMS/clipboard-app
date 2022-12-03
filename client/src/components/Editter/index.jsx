import React from 'react'
import { FiEdit } from 'react-icons/fi'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: end;
`

const Editter = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <FiEdit />
    </Container>
  )
}

export default Editter