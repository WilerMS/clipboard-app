import React from 'react'
import styled from 'styled-components'
import {
  FiPhone,
  FiCopy,
  FiFile,
  FiFileText,
  FiClock,
  FiLogOut,
} from 'react-icons/fi'
import { useAuthContext } from '../../context/auth.context'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
  width: 100%;
  max-width: 500px;
  padding: 15px 25px;

  @media only screen and (max-width: 550px) {
    margin: 0px;
    padding: 15px 0;
  }

  > div {
    background: white;
    width: 70px;
    height: 70px;
    border-radius: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform .2s ease;
    cursor: pointer;
    font-size: 20px;

    &:hover {
      transform: scale(1.1);
    }

    &.active {
      color: blue;
    }
  } 


`

const Categories = ({
  active,
  handleClick = () => { },
}) => {

  const { setLoggedIn } = useAuthContext()

  const handleLogout = () => {
    localStorage.removeItem('token')
    setLoggedIn(false)
  }

  return (
    <Container>
      <div
        className={`${active === 'clipboard' ? 'active' : ''}`}
        onClick={() => handleClick('clipboard')}
      >
        <FiCopy />
      </div>
      <div
        className={`${active === 'contacts' ? 'active' : ''}`}
        onClick={() => handleClick('contacts')}
      >
        <FiPhone />
      </div>
      <div
        className={`${active === 'notes' ? 'active' : ''}`}
        onClick={() => handleClick('notes')}
      >
        <FiFileText />
      </div>
      <div>
        <FiClock />
      </div>
      <div>
        <FiClock />
      </div>
      <div onClick={() => handleLogout('logout')}>
        <FiLogOut />
      </div>
    </Container>
  )
}

export default Categories