import styled from "styled-components";

const H4 = styled.h4`
  color: ${props => (props.dark ? "black" : "white")};
  margin: 0px;
  font-size: 18px;
`;
export default H4;
