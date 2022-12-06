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
  max-width: 550px;
  height: 660px;
  border-radius: 0.2rem;
  box-shadow: 0.1rem 0.1rem 0.4rem #0000003b;
  background: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .task-list {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 1rem 2rem 2rem 2rem;

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