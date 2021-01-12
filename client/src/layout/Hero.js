import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import HeroLinks from "./HeroLinks";
import H1 from "../elements/H1";
import H2 from "../elements/H2";
import Button from "../elements/Button";
import CovidImage from "../images/covid-image.jpg";
import ElectroStatic from "../images/electrostatic-cleaning.jpg";
import PressureCleaning from "../images/pressure-cleaning.jpg";
import HasmatClean from "../images/clean-hasmat.jpg";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: ${props => (props.size === "full" ? "100vh" : "50vh")};
  background: gray;
  background-image: ${props =>
    props.image === "covid"
      ? `url(${CovidImage})`
      : props.image === "electro"
      ? `url(${ElectroStatic})`
      : `url(${HasmatClean})`};
  background-size: cover;
  background-position: bottom;
  background-repeat: none;
  position: relative;
  box-sizing: border-box;
  z-index: 0;
`;

const Headers = styled.div`
  z-index: 2;
  position: absolute;
  top: 10vmin;
  left: 50%;
  transform: translateX(-50%);
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
      <Container image={props.image} size={props.size}>
        <Overlay />
        <NavBar />
        <Headers>
          <H1 center={props.center}>{props.title}</H1>
          <H2 center={props.center}>{props.body}</H2>
          {props.buttonLink ? (
            <Link to={props.buttonLink}>
              <Button>{props.button}</Button>
            </Link>
          ) : null}

          <HeroLinks
            headerOne={props.heroHeaderOne}
            bodyOne={props.heroBodyOne}
            headerTwo={props.heroHeaderTwo}
            bodyTwo={props.heroBodyTwo}
            headerThree={props.heroHeaderThree}
            bodyThree={props.heroBodyThree}
          />
        </Headers>
      </Container>
    </div>
  );
}
