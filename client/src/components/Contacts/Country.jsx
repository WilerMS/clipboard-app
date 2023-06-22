import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { FiChevronDown, FiChevronLeft, FiChevronUp } from 'react-icons/fi'

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.073) 0px 1px 3px, rgba(0, 0, 0, 0.141) 0px 1px 2px;
  border-radius: 5px;
  margin-bottom: 10px;
  
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    cursor: pointer;
    font-weight: bold;
    text-transform: capitalize;

    &.open {
      border-bottom: 1px solid #f0f0f0;
    }
  }

  .children {
    padding-top: 10px;
    display: none;
    overflow: hidden;
    transition: max-height 0.2s ease-out;

    &.open  {
      display: initial;
    }
  }

`

export const Country = ({ country, children }) => {

  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggleExpand = () => setIsExpanded(!isExpanded)

  return (
    <Container className={isExpanded ? 'open' : ''}>
      <div 
        className={`header ${isExpanded ? 'open' : ''}`} 
        onClick={handleToggleExpand}
      >
        <span>{country}</span>
        {isExpanded 
          ? <FiChevronDown />
          : <FiChevronLeft />
        }
      </div>
      <div className={`children ${isExpanded ? 'open' : ''}`}>
        {children}
      </div>
    </Container>
  )
}
