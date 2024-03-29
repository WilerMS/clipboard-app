import React from 'react'
import { useListContext } from './../../context/list.context'
import { FiTrash } from 'react-icons/fi'
import swal from 'sweetalert'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: end;
`

const Deleter = ({ id, onDelete = () => { } }) => {

  const handleClick = () => {
    
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
    .then((isOk) => isOk && onDelete(id))
  }

  return (
    <Container onClick={handleClick}>
      <FiTrash />
    </Container>
  )
}

export default Deleter