import React, { useState } from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #00000099;
  }

  .modal {
    background: white;
    width: 350px;
    height: 300px;
    z-index: 50;
    border-radius: 5px;
    box-shadow: 0.1rem 0.1rem 0.4rem #0000003b;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .modal-header {
    width: 100%;
    height: calc(10% - 10px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid darkgray;
  }

  .modal-body {
    width: 100%;
    height: calc(100%);
    display: flex;
    align-items: center;
  }

  .modal-footer {
    width: calc(100% - 20px);
    height: calc(10% - 10px);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: end;
  }
`

export const Modal = ({
  isOpen = false,
  onClose = () => { },
  children
}) => {

  const handleCoseModal = () => {
    onClose()
  }

  return (
    isOpen &&
      <Container>
        <div className="bg" onClick={handleCoseModal}></div>
        <div className='modal'>
          {children}
        </div>
      </Container>
  )
}
