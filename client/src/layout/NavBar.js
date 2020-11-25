import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

const Container = styled.nav``;

export default function NavBar() {
  return (
    <div>
      <Container>
        <Link to="/"></Link>
        <Link to="/services">Services</Link>
        <Link to="/covid">COVID19</Link>
        <Link to="/contact">Contact</Link>
      </Container>
    </div>
  );
}
