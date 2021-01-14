import styled from "styled-components";

const H2 = styled.h2`
  color: ${props =>
    props.dark ? "#191919" : props.gray ? "#707070" : "white"};
  margin: ${props => (props.center ? "30px auto" : "0px")};
  text-align: ${props => (props.center ? "center" : "left")};
  font-size: 4vmin;
  max-width: 600px;
`;

export default H2;
