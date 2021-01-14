import styled from "styled-components";

const H3 = styled.h3`
  color: ${props =>
    props.dark ? "#191919" : props.gray ? "#707070" : "white"};
  font-size: 32px;
  max-width: 600px;
  @media only screen and (max-width: 500px) {
    font-size: 24px;
    margin: 0px;
  }
`;

export default H3;
