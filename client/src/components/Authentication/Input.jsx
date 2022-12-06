import { Field } from './styles'
import { FiUser } from 'react-icons/fi'

const Input = ({ onChange = () => { }, Icon = FiUser, error, ...props }) => {
  return (
    <Field>
      <Icon />
      <input
        type="text"
        onChange={onChange}
        {...props}
      />
      {error && <span>{error}</span>}
    </Field>
  )
}

export default Input