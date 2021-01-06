import React from "react";
import Form from "./layout/Form";
import Hero from "./layout/Hero";
import H2 from "./elements/H2";

export default function Contact() {
  return (
    <div>
      <Hero title="Contact B2Clean" button="Contact us" />
      <H2 dark>Contact us for a free quote</H2>
      <Form />
      <p>Or give us a call</p>
      <p>07777777777</p>
    </div>
  );
}
