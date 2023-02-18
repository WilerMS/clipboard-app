import * as S from './styles'
import { FiLoader, FiLock } from 'react-icons/fi'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { useEffect, useState } from 'react'
import Input from './Input'
import useAuthentication from '../../hooks/useAuthentication'

const SuccessRegistration = ({ children }) => {
  return (
    <S.ContainerSuccess>
      {children}
    </S.ContainerSuccess>
  )
}

const Register = ({ setIsLogginIn }) => {

  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const { error, loading, register } = useAuthentication()
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

  const handleRegister = () => register({ username: user.username, password: user.password1 }, false, () => setSuccess(false))

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
                <S.SignIn>CLIPBOARD</S.SignIn>
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
                  onClick={handleRegister}
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