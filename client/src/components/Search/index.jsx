import React, { useState } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;

  .search {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    border-bottom: 1px solid #0000002f;
  }

  input {
    padding: 10px 0;
    font-size: 1.2rem;
    height: 100%;
    background: none;
    border: 0;
    outline: none;
    width: 100%;
  }

  svg {
    color: #0000006a;
    cursor: pointer;

    &:hover {
      color: blue;
    }
  }

`

const Search = ({ setTextSearched }) => {

  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
    setTextSearched(e.target.value)
    setIsEditing(e.target.value.length > 0)
  }

  const handleDeleteText = () => {
    setTextSearched('')
    setText('')
    setIsEditing(false)
  }

  return (
    <Container>
      <div className="search">
        <input type="text" placeholder='Search a template...' onChange={handleChange} value={text} />
        {isEditing 
          ? <FiX onClick={handleDeleteText}/> 
          : <FiSearch />
        }
      </div>
    </Container>
  )
}

export default Search