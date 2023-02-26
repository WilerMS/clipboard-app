import React from 'react'
import styled from 'styled-components'
import {CiCirclePlus} from 'react-icons/ci'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  cursor: pointer;
  color: black;
  background: none;
  border: none;
  border-radius: 2px;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color .2s ease;
  margin-top: 10px;

  &:hover {
    color:  #a7a6cb;
  }
`

const Register = ({ 
  onAdd = () => { },
  ...props
}) => {

  return (
    <Container>
      <Button {...props} onClick={onAdd}>
        <CiCirclePlus />
      </Button>
    </Container>
  )
}

export default Register