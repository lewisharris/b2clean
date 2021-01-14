import styled from "styled-components";

const P = styled.p`
  color: ${props =>
    props.dark ? "#191919" : props.gray ? "#707070" : "white"};
  margin: ${props => (props.close ? "0px" : "10px auto auto auto")};
  line-height: 1.4;
`;

export default P;
