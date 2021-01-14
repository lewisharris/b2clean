import styled from "styled-components";

const H4 = styled.h4`
  color: ${props => (props.dark ? "#191919" : "white")};
  margin: 0px;
  font-size: 18px;
  text-align: ${props => (props.center ? "center" : "left")};
`;
export default H4;
