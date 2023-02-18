import React from 'react'
import styled from 'styled-components'
import {
  FiPhone,
  FiCopy,
  FiFile,
} from 'react-icons/fi'

const Container = styled.div`
  position: absolute;
  /* right: 0; */
  bottom: 0;
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin: 15px;

  > div {
    background: white;
    width: 70px;
    height: 70px;
    border-radius: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform .2s ease;
    cursor: pointer;
    font-size: 20px;

    &:hover {
      transform: scale(1.1);
    }

    &.active {
      color: blue;
    }
  } 

`

const Categories = ({
  active,
  handleClick = () => { },
}) => {
  return (
    <Container>
      <div
        className={`${active === 'clipboard' ? 'active' : ''}`}
        onClick={() => handleClick('clipboard')}
      >
        <FiCopy />
      </div>
      <div
        className={`${active === 'contacts' ? 'active' : ''}`}
        onClick={() => handleClick('contacts')}
      >
        <FiPhone />
      </div>
      <div
        className={`${active === 'notes' ? 'active' : ''}`}
        onClick={() => handleClick('notes')}
      >
        <FiFile />
      </div>
    </Container>
  )
}

export default Categories