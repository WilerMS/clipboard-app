import { useState } from 'react'
import { Field } from './styles'
import { FiUser, FiEye, FiEyeOff } from 'react-icons/fi'

const Input = ({ onChange = () => { }, Icon = FiUser, error, ...props }) => {

  const [isPassword, setIsPassword] = useState(true)


  return (
    <Field>
      <div>
        <Icon />
      </div>
      <input
        type="text"
        onChange={onChange}
        {...props}
        {...{
          type: props.type === 'password' && isPassword ? 'password' : undefined 
        }}
      />
      {props.type === 'password' &&
        <button className='eye'
          onClick={() => {
            setIsPassword(!isPassword)
          }}
        >
          {!isPassword ? <FiEye /> : <FiEyeOff />}
        </button>
      }
      {error && <span>{error}</span>}
    </Field>
  )
}

export default Input