import React from "react";
import P from "../elements/P";
import styled from "styled-components";

const Container = styled.div`
  background: #ffc134;
  padding: 30px;
  margin: 50px auto;
`;

export default function InfoBox() {
  return (
    <Container>
      <h3>Secure Covid Cleaning</h3>
      <P dark>
        We use Electrostatic and fogging machines to securely clean your
        property for cover secure maintenance or to disinfect properties when a
        case appears.
      </P>
    </Container>
  );
}
