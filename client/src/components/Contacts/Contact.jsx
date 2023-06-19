import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { FiChevronDown, FiChevronUp, FiCopy, FiEdit, FiTrash } from 'react-icons/fi'
import Copier from '../DragItem/Copier'

const Container = styled.div`  


  .contact-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    cursor: pointer;
    text-transform: capitalize;

    .tools {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

`

export const Contact = ({ id, country, number, name }) => {

  const [isExpanded, setIsExpanded] = useState(true)

  const handleToggleExpand = () => setIsExpanded(!isExpanded)

  const handleDeleteContact = () =>  {
    
  }

  return (
    <Container>
      <div 
        className='contact-item' 
        onClick={handleToggleExpand}
      >
        <span>{name}</span>
        <div className='tools'>
          <span>{number}</span>
          <Copier item={{title: number}} />
          <span><FiEdit /></span>
          <span><FiTrash /></span>
        </div>
      </div>
    </Container>
  )
}
