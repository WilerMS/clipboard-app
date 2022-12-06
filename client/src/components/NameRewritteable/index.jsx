import React from 'react'
import styled from 'styled-components'
import { useListContext } from './../../context/list.context'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  input {
    outline: none;
    border: none;
    width: 100%;
    font-size: 16px;

    &:disabled {
      background: none;
      color: black;
    }
  }
`

const NameRewitteable = ({ id, editing }) => {
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
      <input 
        type="text"
        placeholder='write something...' 
        disabled={!editing} 
        value={text}
        onChange={handleChange}
      />
    </Container>
  )
}

export default NameRewitteable
