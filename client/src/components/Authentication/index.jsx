import React, { useState } from 'react'
import styled from 'styled-components'
import { FiUser, FiLock } from 'react-icons/fi'
import { AppContainer } from '../AppList'
import useFetch from '../../hooks/useFetch'
import { getCookie, useAuthContext } from './../../context/auth.context'

const Container = styled.div`
  width: 100%;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  max-width: 550px;
  height: 550px;
  border-radius: 0.2rem;
  box-shadow: 0.1rem 0.1rem 0.4rem #0000003b;
  background: white;
  overflow: hidden;
  display: flex;

  .login {
    width: calc(100% - 2rem);
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    position: relative;

    .signup {
      margin-top: 50px;
      span  {
        font-weight: bold;
        cursor: pointer;

        &:hover {
          color: #6d6d8f;
        }
      }
      
      &.open {
        margin-top: 10px;
      }
    }

    .error {
      color: red;
      margin-top: 10px;
      height: 25px;
      display: flex;
      align-items: flex-end;
    }

    .goback {
      position: absolute;
      left: 0;
      top: 0;
      padding: 20px 10px;
      font-size: 2rem;
    }
    
  }
`

const SignIn = styled.div`
  font-size: 2rem;
  margin: 20px 0 20px 0;
`

const Field = styled.div`
  width: 70%;
  height: 50px;
  margin-top: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid #29323c;

  svg {
    font-size: 1.5rem;
    margin-left: 10px;
  }

  input {
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    font-size: 1.2rem;
    
    &:-webkit-autofill {
      background: none;
    }
  }
`

const Button = styled.button`
  width: 150px;
  height: 55px;
  background: linear-gradient(60deg,#29323c 0%,#303841 100%);
  color: white;
  border: none;
  margin-top: 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
`

const Register = ({ setIsLogginIn, register }) => {
  return (
    <AppContainer className="App">
      <Container>
        <div className="login">
          <SignIn>TEMPLATES</SignIn>
          <Field>
            <FiUser />
            <input type="text" placeholder='username' />
          </Field>
          <Field>
            <FiLock />
            <input type="password" placeholder='*****' />
          </Field>
          <Field>
            <FiLock />
            <input type="password" placeholder='*****' />
          </Field>
          <div className="error">
          </div>
          <Button>Sign Up</Button>
          <div className='signup open'>
            <span onClick={() => setIsLogginIn(true)}> Go Back</span>
          </div>
        </div>
      </Container>
    </AppContainer>
  )
}

const Login = ({ setIsLogginIn, login = () => {} }) => {

  const [userData, setUserData] = useState({})

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <AppContainer className="App">
      <Container>
        <div className="login">
          <SignIn>TEMPLATES</SignIn>
          <Field>
            <FiUser />
            <input onChange={handleChange} name='user' type="text" placeholder='username' />
          </Field>
          <Field>
            <FiLock />
            <input onChange={handleChange} name='password' type="password" placeholder='*****' />
          </Field>
          <div className="error">
          </div>
          <Button onClick={() => login(userData.user, userData.password)}>Log in</Button>
          <div className='signup'>
            Don't have an account?
            <span onClick={() => setIsLogginIn(false)}> Sign Up</span>
          </div>
        </div>
      </Container>
    </AppContainer>
  )
}

const Authentication = () => {

  const [isLogginIn, setIsLogginIn] = useState(true)
  const { error, loading, fetchData } = useFetch()
  const { setLoggedIn } = useAuthContext()


  const register = async (username, password) => {
    const data = await fetchData('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  const login = async (username, password) => {
    const data = await fetchData('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    localStorage.setItem('token', data.token)
    setLoggedIn(true)
  }

  return (
    isLogginIn
      ? <Login login={login} setIsLogginIn={setIsLogginIn} />
      : <Register register={register} setIsLogginIn={setIsLogginIn} />
  )

}

export default Authentication