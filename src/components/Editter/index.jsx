import React from 'react'
import { FiEdit } from 'react-icons/fi'

const Editter = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <FiEdit />
    </div>
  )
}

export default Editter