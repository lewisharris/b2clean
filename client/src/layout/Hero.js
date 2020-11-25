import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: gray;
`;

export default function Hero() {
  return (
    <div>
      <NavBar />
      <Container> Hero</Container>
    </div>
  );
}
