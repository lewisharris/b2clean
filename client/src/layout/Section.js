import React from "react";
import styled from "styled-components";
import H4 from "../elements/H4";
import P from "../elements/P";

const Container = styled.div`
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.16);
  padding: 20px;
  box-sizing: border-box;
  margin: 40px auto;
  min-height: 300px;
`;

export default function Section(props) {
  return (
    <Container>
      <H4 dark>{props.title}</H4>
      <P dark>{props.body}</P>
    </Container>
  );
}
