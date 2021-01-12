import React from "react";
import Form from "./layout/Form";
import Hero from "./layout/Hero";
import H2 from "./elements/H2";
import H4 from "./elements/H4";
import styled from "styled-components";

const Span = styled.span`
  color: #4e95e8;
  font-size: 24px;
`;

const P = styled.p`
  color: #191919;
  text-align: center;
`;

export default function Contact() {
  return (
    <div>
      <Hero title="Contact B2Clean" center={true} />
      <br></br>
      <br></br>
      <br></br>
      <H4 center dark>
        Contact us for a free quote
      </H4>
      <P center dark>
        Call us on <Span>07968624375</Span>
      </P>

      <P center dark>
        Or send a us a message below
      </P>
      <Form />
    </div>
  );
}
