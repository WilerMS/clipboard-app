import React from 'react'
import styled from 'styled-components'
import { FiPlus } from 'react-icons/fi'
import { useListContext } from '../../context/list.context'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  cursor: pointer;
  color: white;
  background-image: linear-gradient(to top, #a7a6cb 0%, #8989ba 52%, #8989ba 100%);
  padding: 10px;
  width: 100px;
  border: 0;
  border-radius: 2px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Register = () => {

  const { list, setList } = useListContext()

  const handleClick = () => {

    const higherID = list.reduce((acc, curr) => acc > curr.id ? acc : curr.id, 0)
    setList([
      ...list,
      {
        id: higherID + 1,
        title: ''
      }
    ])
  }

  return (
    <Container>
      <Button onClick={handleClick}>
        <FiPlus />
      </Button>
    </Container>
  )
}

export default Register