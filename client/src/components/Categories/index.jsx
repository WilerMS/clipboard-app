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
  position: absolute;
  /* right: 0; */
  bottom: 0;
  display: flex;
  flex-direction: row;
  margin: 15px;
  width: 100%;
  overflow-x: auto;
  max-width: 500px;
  padding: 25px;

  @media only screen and (max-width: 550px) {
    margin: 0px;
  }

  .items {

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 15px;

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
      <div className="items">
        <div
          className={`${active === 'clipboard' ? 'active' : ''}`}
          onClick={() => handleClick('clipboard')}
        >
          <FiCopy />
        </div>
        <div
          /* className={`${active === 'contacts' ? 'active' : ''}`}
          onClick={() => handleClick('contacts')} */
        >
          <FiClock />
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
      </div>
    </Container>
  )
}

export default Categories