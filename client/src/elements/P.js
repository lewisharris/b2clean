import styled from "styled-components";

const P = styled.p`
  color: ${props => (props.dark ? "black" : "white")};
`;

export default P;
