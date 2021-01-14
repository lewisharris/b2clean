import React, { useEffect } from "react";
import Hero from "./layout/Hero";
import Container from "./layout/Container";
import Section from "./layout/Section";
import Sectors from "./layout/Sectors";
import CovidNotice from "./layout/CovidNotice";
import H2 from "./elements/H2";
import carpetImage from "./images/carpet-cleaning.jpg";
import pressureImage from "./images/pressure-cleaning.jpg";
import electrostaticImage from "./images/electrostatic-cleaning.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background: #4e95e8;
  color: white;
  padding: 10px;
  border: none;
  font-size: 24px;
  margin: 30px auto;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background: #3486ea;
  }
`;

const sectionOneHeader = "Carpet Cleaning";
const sectionOneBody = (
  <>
    <p>
      B2clean provides a professional and thorough carpet cleaning service at an
      affordable price. Using our time tested cleaning techniques and state of
      the art technology together with the latest detergents we achieve
      fantastic results time after time.{" "}
      <p>We offer a comprehensive carpet cleaning service that includes:</p>
    </p>
    <p> - A full carpet analysis and report</p>
    <p> - A fixed price with no hidden extras </p>
    <p>
      {" "}
      - Advanced cleaning solutions that complement your carpet and lifestyle
      requirements
    </p>
  </>
);

const sectionTwoHeader = "Pressure Washing";
const sectionTwoBody = (
  <p>
    After years of constant use, your drive way can become discoloured, dull and
    lose its neat finish. Sometimes this can go unnoticed as the effects are so
    gradual.
    <p>
      Here at B2Clean we provide deep cleaning, restoring and renovation of
      driveways and pathways, patios, terraces, stone and tiled surfaces.
    </p>
    We get rid of stains and discolouration of your driveway and patio, terrace
    or pathway caused by atmospheric pollution, unsightly tyre marks, oil
    stains, weeds, moss and slippery algae. All this is the a fraction of the
    cost of replacement.
    <p>We help keep your property looking good for years.</p>
  </p>
);

const sectionThreeHeader = "Electrostatic Cleaning";
const sectionThreeBody = (
  <p>
    Electrostatic disinfecting is a touchless application of chemicals using a
    cordless handheld machine to efficiently and evenly coat surfaces with a
    disinfecting solution.
    <p>
      - Covers 360 degrees of surfaces - Reduces the risk of cross contamination
    </p>
    <p>
      - Allows for disinfectants to hold cationic charge preventing dripping
    </p>
    <p>
      - Reaches hard to reach surfaces and spaces to eliminate germs missed by
      standard spraying and wiping"
    </p>
  </p>
);

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero
        buttonLink="/contact"
        size="full"
        image="electro"
        body="A Range of services for your business From contract, to pressure washing to
            making your property Covid Clean"
        button="Contact us"
        heroHeaderOne="Carpet Cleaning"
        heroBodyOne="Specialist Carpet cleaning for all 
        types of piles"
        heroHeaderTwo="Pressure Washing"
        heroBodyTwo="High pressure washing to restore 
        driveways and walls"
        heroHeaderThree="Electrostatic cleaning"
        heroBodyThree="Contactless disinfectant to reduce 
        contamination throughout your premises"
      />
      <CovidNotice />
      <Container>
        <H2 dark center>
          Services we provide..
        </H2>
        <Section
          image={carpetImage}
          title={sectionOneHeader}
          body={sectionOneBody}
        />
        <Section
          image={pressureImage}
          title={sectionTwoHeader}
          body={sectionTwoBody}
        />
        <Section
          image={electrostaticImage}
          title={sectionThreeHeader}
          body={sectionThreeBody}
        />
        <Sectors />
        <Link to="/contact">
          <Button>Contact us today</Button>
        </Link>
      </Container>
    </div>
  );
}
