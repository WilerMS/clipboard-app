import * as S from './styles'
import { FiUser, FiLock } from 'react-icons/fi'
import { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { useAuthContext } from '../../context/auth.context'


const Login = ({ setIsLogginIn }) => {

  const [userData, setUserData] = useState({})
  const { error, loading, fetchData } = useFetch()
  const { setLoggedIn } = useAuthContext()

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const login = async () => {

    const data = await fetchData('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify({
        username: userData.username, 
        password: userData.password, 
      }),
    })

    if (data.token) {
      localStorage.setItem('token', data.token)
      setLoggedIn(true)
    }
  }

  return (
    <S.Container>
      <div className="login">
        <S.SignIn>TEMPLATES</S.SignIn>
        <S.Field>
          <FiUser />
          <input
            onChange={handleChange}
            name='username'
            type="text"
            placeholder='username'
          />
        </S.Field>
        <S.Field>
          <FiLock />
          <input 
            onChange={handleChange}
            name='password'
            type="password"
            placeholder='*****'
          />
        </S.Field>
        <div className="error">
          {error ? error.message : ''}
        </div>
        <S.Button
          onClick={login}
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