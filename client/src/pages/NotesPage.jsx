import React from 'react'
import { FiSave } from 'react-icons/fi'
import styled from 'styled-components'
import useNotes from '../hooks/useNotes'
import Loading from '../components/Loading'
import TextEditor from '../components/TextEditor'
import GeneralMessage from '../components/GeneralMessage'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

`

const SaveNote = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  align-items: center;
  font-size: 1.5rem;
  height: 80px;

  .principal {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;

    .editing {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      transition: color .2s ease;
      background-image: linear-gradient(60deg,#29323c 0%,#303841 100%);
    }
  }
  
`

export const Notes = () => {

  const { notes, error, loading, postNotes } = useNotes(true)

  const handleSaveNote = () => postNotes()

  if (Boolean(error)) return <GeneralMessage text={error.message} />
  if (loading || !notes) return <Loading />

  return (
    <Container>
      <TextEditor />
      <SaveNote onClick={handleSaveNote}>
        <div className="principal">
          <div className='editing'>
            <FiSave />
          </div>
        </div>
      </SaveNote>
    </Container>
  )
}
