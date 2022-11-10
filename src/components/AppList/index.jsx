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
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 1rem;

    > div {
      width: 100%;
    }

    /* width */
    ::-webkit-scrollbar {
      width: 3px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #00000043;
      border-radius: 3px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #00000092;
    }
  }
`;

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr 1fr;
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