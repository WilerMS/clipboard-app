import React from 'react'
import { FiCopy } from 'react-icons/fi'

const Coppier = ({ item }) => {

  const handleClick = () => {
    navigator.clipboard.writeText(item.title);
  }

  return (
    <>
      <div onClick={handleClick}>
        <FiCopy />
      </div>
    </>
  )
}

export default Coppier