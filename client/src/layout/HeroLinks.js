import React from "react";
import styled from "styled-components";
import P from "../elements/P";
import H4 from "../elements/H4";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin: 0px;
  margin-top: 10vmin;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const LinkSection = styled.div`
  margin: 0px;
  margin-right: 2vw;
  @media only screen and (max-width: 600px) {
    margin-right: 0px;
    margin-top: 30px;
  }
`;

export default function HeroLinks(props) {
  return (
    <Container>
      <LinkSection>
        <H4>{props.headerOne}</H4>
        <P>{props.bodyOne}</P>
      </LinkSection>
      <LinkSection>
        <H4>{props.headerTwo}</H4>
        <P>{props.bodyTwo}</P>
      </LinkSection>
      <LinkSection>
        <H4>{props.headerThree}</H4>
        <P>{props.bodyThree}</P>
      </LinkSection>
    </Container>
  );
}
