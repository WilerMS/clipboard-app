import React from 'react'
import { useListContext } from './../../context/list.context'
import { FiTrash } from 'react-icons/fi'
import swal from 'sweetalert'

const Deleter = ({ id }) => {

  const { list, setList } = useListContext()

  const handleClick = () => {
    const newList = list.filter(item => item.id !== id)

    swal({
      title: "Are you sure?",
      text: "Once deleted, you won't be able to recover this text!",
      position: 'top',
      buttons: {
        cancel: {
          text: "Cancel",
          value: null,
          visible: true,
          className: "",
          closeModal: true,
        },
        confirm: {
          text: "Delete",
          value: true,
          visible: true,
          className: "",
          closeModal: true
        }
      }
      ,
      dangerMode: true,
    })
    .then((isOk) => isOk && setList(newList))

  }

  return (
    <div onClick={handleClick}>
      <FiTrash />
    </div>
  )
}

export default Deleter