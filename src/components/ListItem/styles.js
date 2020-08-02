import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 5px;
  margin-top: 8px;
  border-radius: 4px;
  width: 100%;

  background: ${(props) => props.color};

  & > :last-child {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4px;

    & svg {
      justify-self: center;
      margin: auto;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
