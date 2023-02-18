import React from 'react'
import { FiFile, FiPenTool } from 'react-icons/fi'
import styled from 'styled-components'
import { Editable } from 'slate-react'

const Container = styled.div`

  width: 100%;
  height: 100%;
  background: red;
  display: flex;
  flex-direction: column;

  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
    font-size: 1.1rem;
  }
`

export const Notes = () => {
  return (
    <Container>
      <textarea></textarea>
    </Container>
  )
}
