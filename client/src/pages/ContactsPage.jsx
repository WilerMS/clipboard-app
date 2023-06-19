import React from 'react'
import { useState } from 'react'
import { FiPlus, FiSave } from 'react-icons/fi'
import styled from 'styled-components'
import { Contact } from '../components/Contacts/Contact'
import { Country } from '../components/Contacts/Country'
import GeneralMessage from '../components/GeneralMessage'
import Loading from '../components/Loading'
import Search from '../components/Search'
import useContacts from '../hooks/useContacts'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .search {
    background: linear-gradient(60deg,#29323c 0%,#303841 100%);

    * {
      color: white;
    }
  }

  .countries {
    width: calc(100% - 20px);
    height: 100%;
    padding: 0 10px;
    overflow: scroll;
    padding-top:10px;
  }

  .add-phone {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(60deg,#29323c 0%,#303841 100%);
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
`


export const ContactsPage = () => {

  const [searchedText, setSearchedText] = useState('')
  const { contacts, loading, error } = useContacts()

  console.log({ contacts})

  if (loading) {
    return (
    <Container className="task-list">
      <Loading />
    </Container>)
  }

  if (error) {
    return <Container className="task-list">
      <GeneralMessage
        type='error'
        text={error.message}
      />
    </Container>
  }

  return (
    <Container>
      <Search setTextSearched={setSearchedText} />
      <div className="countries">
        {contacts.map(country => (
          <Country key={country.country} country={country.country}>
            {country.contacts.map(contact => (
              <Contact
                name={contact.name}
                country={contact.country}
                id={contact.id}
                key={contact.id}
                number={contact.number}
              />
            ))}
          </Country>
        ))}
      </div>
      <div className='add-phone'>
        <FiPlus />
      </div>
    </Container>
  )
}
