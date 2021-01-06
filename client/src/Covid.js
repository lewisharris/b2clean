import React from "react";
import Hero from "./layout/Hero";
import H2 from "./elements/H2";
import P from "./elements/P";
import Container from "./layout/Container";

export default function Covid() {
  return (
    <div>
      <Hero
        title="COVID-19"
        body="Keeping your business Covid secure"
        button="Find Out More"
      />
      <Container>
        <H2 dark>
          Let us safely take care of COVID-19 for you with our state of the art
          technology...
        </H2>
        <h3>Secure Covid Cleaning</h3>
        <P dark>
          We use Electrostatic and fogging machines to securely clean your
          property for cover secure maintenance or to disinfect properties when
          a case appears.
        </P>
        <hr></hr>
        <H2 dark>Electrostatic Cleaning</H2>
        <h3>What is Electrostatic Cleaning?</h3>
        <P dark>
          Electrostatic spray surface cleaning is the process of spraying an
          electrostatically charged mist onto surfaces and objects.
          Electrostatic spray uses a specialized solution that is combined with
          air and atomized by an electrode inside the sprayer. Subsequently, the
          spray contains positively charged particles that are able to
          aggressively adhere to surfaces and objects. Because the particles in
          the spray are positively charged, they cling to and coat any surface
          they’re aimed at.{" "}
        </P>
        <P dark>
          For awkwardly shaped objects or hard to reach places, cleaning staff
          only have to point and spray; the nature of the mist allows it to coat
          surfaces evenly, and envelope objects—even if the mist is only sprayed
          from one side. After the spray is applied, the sanitizing agent works
          to disinfect the covered surfaces. For this reason, electrostatic
          spray is an excellent solution for germ and contaminant ridden areas.
        </P>
        <h3>How does it work?</h3>
        <P dark>
          Electrostatic spray is electrically charged, allowing the appropriate
          sanitizers, mold preventatives and disinfectants to wrap around and
          evenly coat all types of surfaces for a more complete clean. As the
          chemical exits the electrostatic sprayer, it’s given a positive
          electrical charge. The droplets then become attracted to all negative
          surfaces, covering the visible area, underside and backside, with the
          sanitizing agent. Surfaces that are already covered will repel the
          spray, making the method extremely efficient.
        </P>
        <H2 dark>Fogging</H2>
        <h3>What is Fogging?</h3>
        <P dark>
          Electrostatic spray surface cleaning is the process of spraying an
          electrostatically charged mist onto surfaces and objects.
          Electrostatic spray uses a specialized solution that is combined with
          air and atomized by an electrode inside the sprayer. Subsequently, the
          spray contains positively charged particles that are able to
          aggressively adhere to surfaces and objects. Because the particles in
          the spray are positively charged, they cling to and coat any surface
          they’re aimed at.{" "}
        </P>
        <P dark>
          For awkwardly shaped objects or hard to reach places, cleaning staff
          only have to point and spray; the nature of the mist allows it to coat
          surfaces evenly, and envelope objects—even if the mist is only sprayed
          from one side. After the spray is applied, the sanitizing agent works
          to disinfect the covered surfaces. For this reason, electrostatic
          spray is an excellent solution for germ and contaminant ridden areas.
        </P>
        <h3>How does it work?</h3>
        <P dark>
          Electrostatic spray is electrically charged, allowing the appropriate
          sanitizers, mold preventatives and disinfectants to wrap around and
          evenly coat all types of surfaces for a more complete clean. As the
          chemical exits the electrostatic sprayer, it’s given a positive
          electrical charge. The droplets then become attracted to all negative
          surfaces, covering the visible area, underside and backside, with the
          sanitizing agent. Surfaces that are already covered will repel the
          spray, making the method extremely efficient.
        </P>
      </Container>
    </div>
  );
}
