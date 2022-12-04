import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'


const Authentication = () => {

  const [isLogginIn, setIsLogginIn] = useState(true)

  return (
    isLogginIn
      ? <Login setIsLogginIn={setIsLogginIn} />
      : <Register setIsLogginIn={setIsLogginIn} />
  )

}

export default Authentication