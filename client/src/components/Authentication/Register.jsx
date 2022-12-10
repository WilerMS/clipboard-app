import * as S from './styles'
import { FiLoader, FiLock } from 'react-icons/fi'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Input from './Input'

const SuccessRegistration = ({ children }) => {
  return (
    <S.ContainerSuccess>
      {children}
    </S.ContainerSuccess>
  )
}

const Register = ({ setIsLogginIn }) => {

  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const { error, loading, fetchData } = useFetch('/register', false)
  const [success, setSuccess] = useState(null)
  const [user, setuser] = useState({
    username: '',
    password1: '',
    password2: ''
  })

  const handleChange = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => setPasswordsMatch(user.password1 === user.password2), [user.password1, user.password2])

  const register = async () => {
    const data = await fetchData({
      method: 'POST',
      body: JSON.stringify({
        username: user.username,
        password: user.password1
      }),
    })
    setSuccess(data)
  }

  return (
    <S.Container>
      <div className="login">
        {loading 
          ? <SuccessRegistration className='loading'>
              <FiLoader className='loader'/>
              <span className='signing'>Signing Up...</span>
            </SuccessRegistration>
          : success
            ? <SuccessRegistration>
                <IoIosCheckmarkCircleOutline />
                <span>{success.message}</span>
                <div className='signup open'>
                  <span onClick={() => setIsLogginIn(true)}> Click here to go back</span>
                </div>
              </SuccessRegistration>
            : <>
                <S.SignIn>TEMPLATES</S.SignIn>
                <Input
                  name='username'
                  placeholder='username'
                  onChange={handleChange}
                />
                <Input
                  name='password1'
                  placeholder='******'
                  onChange={handleChange}
                  type='password'
                  Icon={FiLock}
                />
                <Input
                  name='password2'
                  placeholder='******'
                  onChange={handleChange}
                  type='password'
                  Icon={FiLock}
                  error={!passwordsMatch ? 'Passwords must match' : null}
                />
                <div className="error">{error ? error.message : ''}</div>
                <S.Button
                  disabled={!passwordsMatch}
                  onClick={register}
                >
                  Sign Up
                </S.Button>
                <div className='signup open'>
                  <span onClick={() => setIsLogginIn(true)}> Go Back to login</span>
                </div>
              </>
        }
      </div>
    </S.Container>
  )
}

export default Register