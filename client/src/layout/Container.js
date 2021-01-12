import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: ${props => (props.indent ? "1000px" : "auto")};
  margin: 0px auto;
  box-sizing: border-box;
  padding: ${props => (props.indent ? "80px 20px" : "0px")};
  text-align: center;
  a {
    color: white;
    text-decoration: none;
    padding: 0px 2vw;
  }
  a:hover {
    color: yellow;
    cursor: pointer;
  }
`;

export default Container;
