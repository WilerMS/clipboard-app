import React from 'react'
import styled from 'styled-components'
import { FiEdit, FiCheck, FiX } from 'react-icons/fi'
import AddTemplate from './../AddTemplate'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  align-items: center;
  font-size: 1.5rem;

  .principal {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    cursor: pointer;

    .editing, .confirm, .cancel {
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
  }

  .register {
    height: 0;
    opacity: 0;
    transition: all .3s ease;

    &.open {
      height: 50px;
      opacity: 1;
    }
  }
  
`

const EditMode = ({
  editing = false, 
  setEditing = () => { }, 
  onSave = () =>  { }, 
  onCancel = () =>  { } 
}) => {

  return (<>
    <Container>
      <div className={`register ${editing ? 'open' : ''}`}>
        <AddTemplate disabled={!editing} />
      </div>
      <div className="principal">
        {
          !editing
            ? <div 
                className='editing' 
                onClick={setEditing}
              >
                <FiEdit />
              </div>
            : <>
                <div 
                  className='confirm'
                  onClick={onSave}
                >
                  <FiCheck />
                </div>
                <div 
                  className='cancel'
                  onClick={onCancel}
                >
                  <FiX />
                </div>
              </>
        }
      </div>
    </Container>
    </>
  )
}

export default EditMode