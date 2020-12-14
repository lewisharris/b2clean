import styled from "styled-components";

const P = styled.p`
  color: ${props => (props.dark ? "black" : props.gray ? "#707070" : "white")};
  margin-top: 10px;
`;

export default P;
