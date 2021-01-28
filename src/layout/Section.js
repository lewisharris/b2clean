import React from "react";
import styled from "styled-components";
import H3 from "../elements/H3";
import P from "../elements/P";

const Background = styled.div`
  width: 100vw;
  background: ${props => (props.highlight ? "#1c5598" : "none")};
`;
const Container = styled.div`
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
  text-align: left;
  @media only screen and (max-width: 500px) {
    padding: 40px 0px;
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0);
  }
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  max-width: 700px;
  min-width: 300px;
  width: 50%;
  box-sizing: border-box;
  border: none;
  @media only screen and (max-width: 680px) {
    min-width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  border: none;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

export default function Section(props) {
  return (
    <Background highlight={props.highlight}>
      <Container>
        <InnerContainer>
          <H3 dark={props.dark} p>
            {props.title}
          </H3>
          <P dark={props.dark}>{props.body}</P>
        </InnerContainer>
        <InnerContainer>
          <Img src={props.image} alt={props.title} />
        </InnerContainer>
      </Container>
    </Background>
  );
}
