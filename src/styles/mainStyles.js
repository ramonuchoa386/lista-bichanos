import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.grey};

  @media only screen and (max-width: 520px) {
    diplay: flex;
    flex-direction: column;
    overflow: scroll;
  }
`;
