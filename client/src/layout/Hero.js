import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import HeroLinks from "./HeroLinks";
import CovidImage from "../images/covid-image.jpg";
import H1 from "../elements/H1";
import H2 from "../elements/H2";
import Button from "../elements/Button";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: gray;
  background-image: url(${CovidImage});
  background-size: cover;
  background-position: bottom;
  background-repeat: none;
  position: relative;
  box-sizing: border-box;
  z-index: 0;
`;

const Headers = styled.div`
  z-index: 2;
  margin: 10vw;
  position: absolute;
  top: 10vmin;
  left: 0px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export default function Hero(props) {
  return (
    <div>
      <Container>
        <Overlay />
        <NavBar />
        <Headers>
          <H1>{props.title}</H1>
          <H2>{props.body}</H2>
          <Button>{props.button}</Button>
          <HeroLinks />
        </Headers>
      </Container>
    </div>
  );
}
