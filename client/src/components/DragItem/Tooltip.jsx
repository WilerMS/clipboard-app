import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 25px;
  right: -26px;
  width: 70px;
  z-index: 100;
  background: #454545;
  padding: 5px 0px;
  justify-content: center;
  border-radius: 5px;
  color: white;
  display: none;
  cursor: pointer;

  &::after {
    display:block;
    content: "";
    position:absolute;
    top: -6px;
    transform:translateY(-50%);
    border: 10px solid #454545;
    border-color: transparent transparent #454545 transparent;
  }

`

const Tooltip = ({ children }) => {
  return (
    <Container
      className='coppier'
    >
      {children}
    </Container>
  )
}

export default Tooltip