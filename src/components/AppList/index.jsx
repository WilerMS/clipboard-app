import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`

export const ListContainer = styled.div`
  width: 100%;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  max-width: 30rem;
  padding: 2rem;
  border-radius: 0.2rem;
  box-shadow: 0.1rem 0.1rem 0.4rem #0000003b;
  background: white;

  .task-list {
    max-height: 350px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export const ListItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 8fr 1fr 1fr;
  align-items: center;
  color: #444444;
  padding: 0.8rem 0.3rem;
  border-bottom: 1px solid #dddddd;
  background: white;
   &:last-child {
    border-bottom: none;
  }
  span {
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