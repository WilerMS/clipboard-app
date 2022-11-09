import React from 'react'
import styled from 'styled-components'
import { useListContext } from './../../context/list.context'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  input {
    outline: none;
    border: none;
    width: 100%;
    font-size: 16px;
  }
`

const NameRewitteable = ({ id }) => {
  const { list, setList } = useListContext()
  const text = list.find(item => item.id === id ).title
  const handleChange = (e) => {
    const itemIndex = list.findIndex(item => item.id === id )
    const newList = [...list]
    newList[itemIndex].title = e.target.value
    setList(newList)
  }

  return (
    <Container>
      <input type="text" placeholder='write something...' value={text} onChange={handleChange}/>
    </Container>
  )
}

export default NameRewitteable
