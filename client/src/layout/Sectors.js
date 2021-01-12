import React from "react";
import styled from "styled-components";
import P from "../elements/P";

const Container = styled.div`
  background: #f4f4f4;
  width: 100vw;
  margin: 100px 0px;
  padding: 50px 0px;
`;
const Heading = styled.span`
  color: #1c5598;
  font-size: 36px;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  font-weight: ${props => (props.bold ? "700" : "auto")};
  display: ${props => (props.main ? "block" : "auto")};
`;
const SubHeading = styled(Heading)`
  font-size: 24px;
  font-weight: 700;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1000px;
  margin: 50px auto;
`;
const GridSegment = styled.div`
  background: white;
  flex: 0 0 30%;
  margin: 10px;
  padding: 20px 40px;
  box-sizing: border-box;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  min-width: 250px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
`;

export default function Sectors() {
  return (
    <Container>
      <Heading main>
        We Work within a Range of
        <Heading bold> Sectors</Heading>
      </Heading>
      <Grid>
        <GridSegment>
          <SubHeading>Golf Clubs</SubHeading>
          <P gray>Over 10 years experience in cleaning golf clubs</P>
        </GridSegment>
        <GridSegment>
          <SubHeading>Offices</SubHeading>
          <P gray>One off or contract scheduled office cleans.</P>
        </GridSegment>
        <GridSegment>
          <SubHeading>Charity Offices</SubHeading>
          <P gray>Some Text about the sector or service mentioned</P>
        </GridSegment>
        <GridSegment>
          <SubHeading>Restaurants</SubHeading>
          <P gray>Some Text about the sector or service mentioned</P>
        </GridSegment>
        <GridSegment>
          <SubHeading>Coffee Shops</SubHeading>
          <P gray>Some Text about the sector or service mentioned</P>
        </GridSegment>
        <GridSegment>
          <SubHeading>Training Centres</SubHeading>
          <P gray>Some Text about the sector or service mentioned</P>
        </GridSegment>
      </Grid>
    </Container>
  );
}
