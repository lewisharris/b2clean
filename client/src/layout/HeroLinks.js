import React from "react";
import styled from "styled-components";
import P from "../elements/P";
import H4 from "../elements/H4";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0px;
  margin-top: 10vmin;
`;
const LinkSection = styled.div`
  margin: 0px;
  margin-right: 2vw;
`;

export default function HeroLinks() {
  return (
    <Container>
      <LinkSection>
        <H4>Carpet Cleaning</H4>
        <P>Specialist Carpet cleaning for all types of piles</P>
      </LinkSection>
      <LinkSection>
        <H4>Carpet Cleaning</H4>
        <P>Specialist Carpet cleaning for all types of piles</P>
      </LinkSection>
      <LinkSection>
        <H4>Carpet Cleaning</H4>
        <P>Specialist Carpet cleaning for all types of piles</P>
      </LinkSection>
    </Container>
  );
}
