import styled from "styled-components";

const H2 = styled.h2`
  color: ${props => (props.dark ? "black" : props.gray ? "#707070" : "white")};
  font-size: 4vmin;
  max-width: 600px;
`;

export default H2;
