import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  max-width: 550px;
  height: 600px;
  border-radius: 0.2rem;
  box-shadow: 0.1rem 0.1rem 0.4rem #0000003b;
  background: white;
  overflow: hidden;
  display: flex;

  .login {
    width: calc(100% - 2rem);
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    position: relative;

    .signup {
      margin-top: 50px;
      span  {
        font-weight: bold;
        cursor: pointer;

        &:hover {
          color: #6d6d8f;
        }
      }
      
      &.open {
        margin-top: 10px;
      }
    }

    .error {
      color: red;
      margin-top: 10px;
      height: 25px;
      display: flex;
      align-items: flex-end;
    }

    .goback {
      position: absolute;
      left: 0;
      top: 0;
      padding: 20px 10px;
      font-size: 2rem;
    }

    @media only screen and (max-width: 550px) {
      height: 100%;
      justify-content: center;

      .signup {
        margin-bottom: 200px;
      }
    }
    
  }
`

export const SignIn = styled.div`
  font-size: 2rem;
  margin: 20px 0 20px 0;
`

export const Field = styled.div`
  width: 70%;
  height: 50px;
  margin-top: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid #29323c;
  position: relative;

  svg {
    font-size: 1.5rem;
    margin-left: 10px;
  }

  input {
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    font-size: 1.2rem;
    
    &:-webkit-autofill {
      background: none;
    }
  }

  span {
    position: absolute;
    bottom: -25px;
    left: 5px;
    color: red;
  }

  .eye {
    background: none;
    border: none;
    outline: none;
    margin-right: 10px;
    cursor: pointer;
  }
`

export const Button = styled.button`
  width: 150px;
  height: 55px;
  background: linear-gradient(60deg,#29323c 0%,#303841 100%);
  color: white;
  border: none;
  margin-top: 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
`

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

`
export const ContainerSuccess = styled.div`

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  
  .signup {
    margin-bottom: 70px;
  }
  
  .signing {
    margin-top: 30px;
    margin-bottom: 70px;
    font-size: 2rem;
  }

  .loader {
    animation: ${loading} infinite 10s linear;
  }

  svg {
    font-size: 10rem;
  }

`