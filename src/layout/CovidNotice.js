import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 50px auto;
  position: relative;
  justify-content: center;
`;

const Segment = styled.div`
  max-width: 400px;
  min-width: 40%;
  line-height: 1.5;
  padding: 0px 50px;
  margin-bottom: 50px;
`;

const H2 = styled.h2`
  padding: 0px;
  margin: 0px;
`;

const P = styled.p`
  line-height: 1.5;
  padding: 0px;
  margin: 10px 0px;
`;

const LineBreak = styled.div`
  width: 80%;
  margin: auto;
  background: rgba(0, 0, 0, 0.1);
  height: 2px;
`;

export default function CovidNotice() {
  return (
    <Container>
      <Segment>
        <H2 dark>
          Our services are all unique to your needs and to the best standards.
        </H2>
      </Segment>
      <Segment>
        <H2 dark>We Are Covid Secure</H2>
        <P dark>
          In order to meet government guidelines on hygeine and cleanliness and
          to to protect both you and our staff.
        </P>
      </Segment>
      <LineBreak />
    </Container>
  );
}
