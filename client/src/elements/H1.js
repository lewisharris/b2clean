import styled from "styled-components";

const H1 = styled.h1`
  color: white;
  font-size: 8vmin;
  text-align: ${props => (props.center ? "center" : "left")};
`;

export default H1;
