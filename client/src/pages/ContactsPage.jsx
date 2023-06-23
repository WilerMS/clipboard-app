import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import styled from "styled-components";
import swal from "sweetalert";
import { Contact } from "../components/Contacts/Contact";
import { Country } from "../components/Contacts/Country";
import GeneralMessage from "../components/GeneralMessage";
import Loading from "../components/Loading";
import { Modal } from "../components/Modal";
import AddEditForm from "../components/Modal/AddEditForm";
import Search from "../components/Search";
import useContacts from "../hooks/useContacts";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .search {
    background: linear-gradient(60deg, #29323c 0%, #303841 100%);

    * {
      color: white;
    }
  }

  .countries {
    width: calc(100% - 20px);
    height: 100%;
    padding: 0 10px;
    overflow: auto;
    padding-top: 10px;
  }

  .add-phone {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(60deg, #29323c 0%, #303841 100%);
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const ContactsPage = () => {
  const [searchedText, setSearchedText] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const {
    contacts,
    loading,
    error,
    postContact,
    deleteContact,
    updateContact,
  } = useContacts();

  const filteredContacts = contacts.filter(({ keys }) => {
    return keys
      .join(" ")
      .toLowerCase()
      .includes(searchedText.toLocaleLowerCase());
  });

  const handleAddContact = async (data) => {
    await postContact(data)
    setIsCreating(false)
  };

  if (loading) {
    return (
      <Container className="task-list">
        <Loading />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="task-list">
        <GeneralMessage type="error" text={error.message} />
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Search setTextSearched={setSearchedText} />
        <div className="countries">
          {filteredContacts.map((country) => (
            <Country key={country.country} country={country.country}>
              {country.contacts.map((contact) => (
                <Contact
                  name={contact.name}
                  country={contact.country}
                  id={contact.id}
                  key={contact.id}
                  number={contact.number}
                  deleteContact={deleteContact}
                  editContact={updateContact}
                />
              ))}
            </Country>
          ))}
        </div>
        <div className="add-phone" onClick={() => setIsCreating(true)}>
          <FiPlus />
        </div>
      </Container>
      <Modal isOpen={isCreating} onClose={() => setIsCreating(false)}>
        <AddEditForm
          title="Add Contact"
          onSubmit={handleAddContact}
        />
      </Modal>
    </>
  );
};
