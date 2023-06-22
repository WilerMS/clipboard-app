import React from 'react'
import { useState } from 'react'
import { FiCopy, FiEdit2, FiPenTool } from 'react-icons/fi'
import styled from 'styled-components'
import Tooltip from './Tooltip'

const Container = styled.div`
  display: flex;
  justify-content: end;
  user-select: none;
  position: relative;

  &:hover {
    .coppier {
      display: flex;
    }
  }
`

const Modifier = ({ onClick = () => { } }) => {

  return (
    <Container className='edit' onClick={onClick}>
      <FiEdit2 />
      <Tooltip>
        Edit
      </Tooltip>
    </Container>
  )
}

export default Modifier