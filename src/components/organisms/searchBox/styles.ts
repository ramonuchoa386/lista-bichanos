import styled from "styled-components";

export const SearchResultsWrapper = styled.section`
  background-color: white;
  border-left: 6px solid ${(props) => props.theme.colors.blue};
  margin: 50px;
  padding: 30px;
  color: ${(props) => props.theme.colors.darkGrey};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 520px) {
    overflow: scroll;
    margin: 20px;
    padding: 20px;
  }

  & > p {
    text-align: center;
    color: ${(props) => props.theme.colors.lightGrey};
  }

  label[for="search"] {
    display: flex;
    font-size: 2rem;
    border-bottom: 4px dotted ${(props) => props.theme.colors.grey};
    padding-bottom: 30px;
    margin-bottom: 30px;

    @media only screen and (max-width: 520px) {
      flex-direction: column;
      align-items: center;
      font-size: 1.6rem;
    }

    input {
      border-radius: 3px;
      border: 1px solid lightGrey;
      margin-left: 30px;
      width: 40%;
      height: 2.5rem;
      padding-left: 20px;

      @media only screen and (max-width: 520px) {
        margin-left: 0;
        margin-top: 30px;
        width: unset;
      }
    }
  }

  button.load-more {
    margin: 0 auto;
    display: block;
    border: 1px solid lightgray;
    padding: 10px 35px;
    text-transform: uppercase;
    font-size: 1rem;
    color: black;
    border-radius: 3px;
  }

  article {
    display: flex;
    align-items: flex-start;
    margin-top: 30px;

    @media only screen and (max-width: 520px) {
      flex-direction: column;
      align-items: center;
    }

    img.catThumb {
      min-width: 200px;
      height: auto;
    }

    div {
      margin-left: 30px;

      @media only screen and (max-width: 520px) {
        margin-left: 0;
        margin-top: 30px;
      }

      ul {
        list-style-type: none;
        margin: 30px 0 50px;

        li {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          &:not(:last-of-type) {
            margin-bottom: 10px;
          }

          p {
            margin-right: 20px;
            width: 130px;

            @media only screen and (max-width: 520px) {
              width: 100px;
              font-size: 0.8rem;
            }
          }

          span {
            i {
              color: ${(props) => props.theme.colors.paleGrey};

              @media only screen and (max-width: 520px) {
                font-size: 0.8rem;
              }

              &.starRated {
                color: ${(props) => props.theme.colors.starRated};
              }
            }
          }
        }
      }
    }
  }
`;
