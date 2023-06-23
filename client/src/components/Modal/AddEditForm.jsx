import React from "react"
import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background: linear-gradient(60deg,#29323c 0%,#303841 100%);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 5px 25px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  label {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin-bottom: 10px;

    input {
      padding: 5px;
    }
  }

  .error {
    color: red;
  }
`

const AddEditForm = ({
  title = 'Editar formulario',
  id,
  name = '',
  country = '',
  number = '',
  onSubmit = () => {}

}) => {

  const [data, setData] = useState({ id, name, country, number })
  const [error, setError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()

    const isOk = !!data.country && !!data.name && !!data.number

    if (isOk) {
      onSubmit(data)
      return
    }

    setError(true)

  }

  const handleChange = (value, key) => {
    setData({
      ...data,
      [key]: value
    })
  }

  return (
    <>
      <header className="modal-header">
        {title}
      </header>
      <div className="modal-body">
        <Form onSubmit={handleSubmit}>

          <label htmlFor="country">
            País
            <input 
              type="text" 
              id="country" 
              value={data.country} 
              onChange={(e) => handleChange(e.currentTarget.value, 'country')}
            />
          </label>

          <label htmlFor="name">
            Name
            <input 
              type="text" 
              id="name" 
              value={data.name}
              onChange={(e) => handleChange(e.currentTarget.value, 'name')}
            />
          </label>

          <label htmlFor="number">
            Number
            <input 
              type="text" 
              id="number" 
              value={data.number}
              onChange={(e) => handleChange(e.currentTarget.value, 'number')}
            />
          </label>

          {error && 
          <div className="error">
            Missing data
          </div>}
          <Button type="submit">Send</Button>
        </Form>
      </div>
    </>
  );
};

export default AddEditForm;
