import styled from "styled-components";

export const ButtonContainer = styled.button`
      color: var(--mainWhite);
      border-radius: 0.5rem;
      border-style: none;
      background: var(--mainGreen);
      padding: 0.2rem 0.5rem;
      margin: 0.2rem 0.5rem 0.2rem 0;
      transition: all 0.3s linear;
      .add-button {
        font-size:calc(25px + 0.5vw);
      }
      &:hover{
        background: var(--lightGreen2);
        color: var(--darkGreen);
      }
      &:focus {
        outline: none
      }
`

export const FormInputs = styled.div`
    .darkgreen-border .form-control:focus {
        border: 1px solid rgb(43, 122, 120);
        box-shadow: 0 0 0 0.2rem rgba(43, 122, 120, .25);
    }  
`
