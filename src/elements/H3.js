import styled from "styled-components";

const H3 = styled.h3`
  color: ${props =>
    props.dark ? "#191919" : props.gray ? "#707070" : "white"};
  font-size: 4vmin;
  max-width: 600px;
`;

export default H3;
