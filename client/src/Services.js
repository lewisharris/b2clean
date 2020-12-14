import React from "react";
import Hero from "./layout/Hero";
import Container from "./layout/Container";
import Section from "./layout/Section";
import Sectors from "./layout/Sectors";
import CovidNotice from "./layout/CovidNotice";
import H2 from "./elements/H2";

export default function Services() {
  return (
    <div>
      <Hero
        body="A Range of services for your business From contract, to pressure washing to
            making your property Covid Clean"
        button="Contact us"
      />
      <CovidNotice />
      <Container>
        <H2 dark>Services we provide..</H2>
        <Section
          title="Carpet Cleaning"
          body="B2clean provides a professional and thorough carpet cleaning service at an affordable price. Using our time tested cleaning techniques and state of the art technology together with the latest detergents we achieve fantastic results time after time. We offer a comprehensive carpet cleaning service that includes:
- A full carpet analysis and report
- A fixed price with no hidden extras 
- Advanced cleaning solutions that complement your carpet and lifestyle requirements"
        />
        <Section
          title="Pressure Washing"
          body="After years of constant use, your drive way can become discoloured, dull and lose its neat finish. Sometimes this can go unnoticed as the effects are so gradual. Here at B2Clean we provide deep cleaning, restoring and renovation of driveways and pathways, patios, terraces, stone and tiled surfaces.We get rid of stains and discolouration of your driveway and patio, terrace or pathway caused by atmospheric pollution, unsightly tyre marks, oil stains, weeds, moss and slippery algae.
All this is the a fraction of the cost of replacement. We help keep your property looking good for years ."
        />
        <Section
          title="Electrostatic Cleaning"
          body="Electrostatic disinfecting is a touchless application of chemicals using a cordless handheld machine to efficiently and evenly coat surfaces with a disinfecting solution.
- Covers 360 degrees of surfaces
- Reduces the risk of cross contamination
- Allows for disinfectants to hold cationic charge preventing dripping
- Reaches hard to reach surfaces and spaces to eliminate germs missed by standard spraying and wiping"
        />
        <Sectors />
      </Container>
    </div>
  );
}
