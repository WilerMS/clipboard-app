import React from 'react'
import styled from 'styled-components'
import Coppier from '../Coppier';
import Deleter from '../Deleter';
import { DragHandle } from '../DragHandle';
import NameRewitteable from '../NameRewritteable';


const Container = styled.div`
  display: grid;
  grid-template-columns: ${props => props.editing ? '1fr 10fr 1fr' : '11fr 1fr'};
  align-items: center;
  background: white;
  color: #444444;
  padding: 0.8rem 0.3rem;
  border-bottom: 1px solid #dddddd;
   &:last-child {
    border-bottom: none;
  }
  svg {
    width: 20px;
    cursor: pointer;
    transition: all .5s ease;

    &:hover {
      color: blue;
    }
    
  }
`;

const ListItem = ({ provided, snapshot, item, editing }) => {

  return (
    <Container
      ref={provided.innerRef}
      {...provided.draggableProps}
      style={{
        ...provided.draggableProps.style,
        boxShadow: snapshot.isDragging
          ? "0 0 .2rem #0000004e"
          : "none",
      }}
      editing={editing}
    >
      {editing &&<DragHandle {...provided.dragHandleProps} />}
      <NameRewitteable editing={editing} id={item.id} />
      {!editing && <Coppier item={item} />}
      {editing && <Deleter id={item.id} />}
    </Container>
  )
}

export default ListItem