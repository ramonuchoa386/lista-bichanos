import styled from "styled-components";

export const CustomBtn = styled.button`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.slateGrey};
  font-size: 1.5rem;
  cursor: pointer;
`;
