import React from "react";
import styled from "styled-components";
import H4 from "../elements/H4";
import P from "../elements/P";
import carpet from "../images/carpet.jpg";

const Container = styled.div`
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.16);
  padding: 40px;
  box-sizing: border-box;
  margin: 40px auto;
  min-height: 300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-width: 75vw;
  max-width: 1000px;
  justify-content: center;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  max-width: 700px;
  min-width: 300px;
  width: 50%;
  box-sizing: border-box;
  @media only screen and (max-width: 680px) {
    min-width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

export default function Section(props) {
  return (
    <Container>
      <InnerContainer>
        <H4 dark>{props.title}</H4>
        <P dark>{props.body}</P>
      </InnerContainer>
      <InnerContainer>
        <Img src={carpet} alt="props.title" />
      </InnerContainer>
    </Container>
  );
}
