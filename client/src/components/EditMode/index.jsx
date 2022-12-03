import React from 'react'
import styled from 'styled-components'
import { FiEdit, FiCheck, FiX } from 'react-icons/fi'
import { useListContext } from '../../context/list.context'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 70px;
  cursor: pointer;
  color: white;
  align-items: center;
  /* background-image: linear-gradient(to top, #a7a6cb 0%, #8989ba 52%, #8989ba 100%); */
  font-size: 1.5rem;  

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: color .2s ease;
  }

  .editing {
    background-image: linear-gradient(60deg,#29323c 0%,#303841 100%);
  }

  .confirm {
    background: #30b636;
  }

  .cancel {
    background: #e1413e;
  }
`

const EditMode = ({ 
  editing = false, 
  setEditing = () => { }, 
  onSave = () =>  { }, 
  onCancel = () =>  { } 
}) => {

  const { 
    originalList,
    setOriginalList,
    list,
    setList, 
  } = useListContext()

  const handleConfirm = () => {
    console.log({list, originalList})

    //TODO: Error Handling
    //onSave()
    setOriginalList(list.map(a => ({...a})))
    setEditing(false)
  }

  const handleCancel = () => {
    console.log({list, originalList})
    //onCancel()
    setList(originalList.map(a => ({...a})))
    setEditing(false)
  }

  const handleEditing = () => setEditing(true)

  return (
    <Container>
      {
        !editing
          ? <div 
              className='editing' 
              onClick={handleEditing}
            >
              <FiEdit />
            </div>
          : <>
              <div 
                className='confirm'
                onClick={handleConfirm}
              >
                <FiCheck />
              </div>
              <div 
                className='cancel'
                onClick={handleCancel}
              >
                <FiX />
              </div>
            </>
      }
    </Container>
  )
}

export default EditMode