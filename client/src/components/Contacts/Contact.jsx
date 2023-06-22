import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { FiChevronDown, FiChevronUp, FiCopy, FiEdit, FiTrash } from 'react-icons/fi'
import Copier from '../DragItem/Copier'
import Deleter from '../DragItem/Deleter'
import Modifier from '../DragItem/Modifier'
import { Modal } from '../Modal'
import AddEditForm from '../Modal/AddEditForm'

const Container = styled.div`

  &:nth-child(odd) {
    background: #f3f6f7;
  }

  .contact-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    cursor: pointer;
    text-transform: capitalize;

    .number {
      display: flex;
      align-items: center;
      gap: 10px;

      .contact-name {
        font-weight: bold;
      }
    }

    .tools {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

`

export const Contact = ({ 
  id, 
  number, 
  name, 
  country,
  deleteContact = (id) => {}, 
  editContact = (data) => {} 
}) => {

  const [isExpanded, setIsExpanded] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const handleToggleExpand = () => setIsExpanded(!isExpanded)
  const handleDeleteContact = () => deleteContact(id)
  const handleEditContact = (data) => {
    editContact(data)
  }

  return (
    <>
      <Container>
        <div 
          className='contact-item' 
          onClick={handleToggleExpand}
          >
          <div className='number'>
            <span className='contact-name'>{name}: </span>
            <span>{number}</span>
          </div>
          <div className='tools'>
            <Copier item={{title: number}} />
            <Modifier onClick={() => setIsEditing(true)}/>
            <Deleter id={id} onDelete={handleDeleteContact} />
          </div>
        </div>
      </Container>
      <Modal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
      >
        <AddEditForm
          name={name}
          country={country}
          number={number}
          id={id}
          title='Edit Contact'
          onSubmit={handleEditContact}
        />
      </Modal>
    </>
  )
}
