import React from 'react'
import styled from 'styled-components'
import { useAuthContext } from '../../context/auth.context'

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 10px;
`

const Button = styled.button`
  border: none;
  background: white;
  padding: 10px 5px;
  width: 150px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color:  #a7a6cb;
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
          Logout
        </Button>
    </Container>
  )
}

export default Logout