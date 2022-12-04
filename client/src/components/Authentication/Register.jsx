import * as S from './styles'
import { FiUser, FiLock, FiCheckCircle, FiLoader } from 'react-icons/fi'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'

const SuccessRegistration = ({ children }) => {
  return (
    <S.ContainerSuccess>
      {children}
    </S.ContainerSuccess>
  )
}

const Register = ({ setIsLogginIn }) => {

  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const { error, loading, fetchData } = useFetch()
  const [success, setSuccess] = useState(null)
  const [userData, setUserData] = useState({
    username: '',
    password1: '',
    password2: ''
  })

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    setPasswordsMatch(userData.password1 === userData.password2)
  }, [userData.password1, userData.password2])

  const register = async () => {
    const data = await fetchData('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify({
        username: userData.username,
        password: userData.password1
      }),
    })
    setSuccess(data)
  }

  return (
    <S.Container>
      <div className="login">
        {loading 
          ? <SuccessRegistration
              className='loading'
            >
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
                <S.Field>
                  <FiUser />
                  <input type="text" onChange={handleChange} name='username' placeholder='username' />
                  <span></span>
                </S.Field>
                <S.Field>
                  <FiLock />
                  <input type="password" onChange={handleChange} name='password1' placeholder='*****' />
                </S.Field>
                <S.Field>
                  <FiLock />
                  <input type="password" onChange={handleChange} name='password2' placeholder='*****' />
                  {!passwordsMatch && <span>Passwords must match</span>}
                </S.Field>
                <div className="error">{error ? error.message : ''}</div>
                <S.Button
                  disabled={!passwordsMatch}
                  onClick={register}
                >
                  Sign Up
                </S.Button>
                <div className='signup open'>
                  <span onClick={() => setIsLogginIn(true)}> Go Back</span>
                </div>
              </>
        }
      </div>
    </S.Container>
  )
}

export default Register