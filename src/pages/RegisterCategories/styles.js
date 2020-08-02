import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: auto;

  ul {
    list-style: none;
    margin-top: 10px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    min-height: 32px;
    background: var(--primary);
    color: var(--white);
    border-radius: 4px;
    border: 0;

    &:hover {
      opacity: 0.8;
    }
  }
`;
