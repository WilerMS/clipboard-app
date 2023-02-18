import * as S from './styles'
import { FiLock } from 'react-icons/fi'
import { useState } from 'react'
import Input from './Input'
import useAuthentication from '../../hooks/useAuthentication'


const Login = ({ setIsLogginIn }) => {

  const [userData, setUserData] = useState({ username: '', password: '' })
  const { error, loading, login } = useAuthentication()

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <S.Container>
      <div className="login">
        <S.SignIn>CLIPBOARD</S.SignIn>
        <Input
          name='username'
          placeholder='username'
          onChange={handleChange}
        />
        <Input
          name='password'
          placeholder='******'
          type='password'
          onChange={handleChange}
          Icon={FiLock}
        />
        <div className="error">
          {error ? error.message : ''}
        </div>
        <S.Button 
          onClick={() => login({
            username: userData.username,
            password: userData.password,
          })} 
          disabled={loading}
        >
          Log in
        </S.Button>
        <div className='signup'>
          Don't have an account?
          <span onClick={() => setIsLogginIn(false)}> Sign Up</span>
        </div>
      </div>
    </S.Container>
  )
}

export default Login