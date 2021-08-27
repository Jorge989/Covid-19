import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 200px;
  flex-direction: flex-end;
  margin-top: 3px;
  align-content: flex-end;
  justify-content: flex-end;
  margin-left: 68% !important;
  z-index: 1100;
  top: 6rem;
  right: 3rem;
  color: red;
  cursor: pointer;

  svg {
    transition: color 0.3s ease-in-out;
  }
  &:hover {
    svg {
      color: #4444;
    }
  }
`;
