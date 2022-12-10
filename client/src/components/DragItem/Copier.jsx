import React from 'react'
import { useState } from 'react'
import { FiCopy } from 'react-icons/fi'
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

const Copier = ({ item }) => {

  const  [isCopied, setIsCopied] = useState(false)

  const handleClick = () => {
    setIsCopied(true)
    navigator.clipboard.writeText(item.title)
    setTimeout(() => setIsCopied(false), 1000)
  }

  return (
    <Container onClick={handleClick}>
      <FiCopy />
      <Tooltip>
        { isCopied 
          ? 'Copied' 
          : 'Copy'
        }
      </Tooltip>
    </Container>
  )
}

export default Copier