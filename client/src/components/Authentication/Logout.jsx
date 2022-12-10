import React from 'react'
import styled from 'styled-components'
import { useAuthContext } from '../../context/auth.context'
import { FiLogOut } from 'react-icons/fi'

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 10px;

  @media only screen and (max-width: 550px) {
    bottom: 70px;
    right: 10px;
  }
`

const Button = styled.button`
  border: none;
  background: white;
  padding: 10px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #00000099;

  &:hover {
    color:  #000000;
  }
`

const Logout = () => {

  const { loggedIn, setLoggedIn } = useAuthContext()

  const handleLogout = () => {
    localStorage.removeItem('token')
    setLoggedIn(false)
  }

  return (
    loggedIn && 
      <Container>
        <Button onClick={handleLogout}>
          <FiLogOut />
        </Button>
    </Container>
  )
}

export default Logout