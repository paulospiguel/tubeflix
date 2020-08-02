import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 10px 0;

  label {
    flex: 1;
  }

  input,
  textarea {
    min-height: 28px;
    width: 100%;
    flex: 1;
    border-radius: 5px;
    padding: 4px;
    border: 0;

    &:focus {
      box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.6);
    }
  }

  input[type="color"] {
    border: 0;
    background: transparent;
    min-height: 40px;
    cursor: pointer;
  }
`;
