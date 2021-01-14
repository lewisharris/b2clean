import styled from "styled-components";

const H1 = styled.h1`
  color: white;
  font-size: 8vmin;
  text-align: ${props => (props.center ? "center" : "left")};
  @media only screen and (max-width: 500px) {
    font-size: 32px;
  }
`;

export default H1;
