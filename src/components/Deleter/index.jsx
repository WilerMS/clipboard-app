import React from 'react'
import { useListContext } from './../../context/list.context'
import { ReactComponent as DeleterIcon } from "./icon.svg"
import { FiTrash } from 'react-icons/fi'

const Deleter = ({ id }) => {

  const { list, setList } = useListContext()

  const handleClick = () => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  return (
    <div onClick={handleClick}>
      <FiTrash />
    </div>
  )
}

export default Deleter