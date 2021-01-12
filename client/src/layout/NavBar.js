import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import B2CleanLogo from "../images/b2clean-logo.png";

const Container = styled.nav`
  position: absolute;
  z-index: 2;
  top: 40px;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 20vw;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  font-size: 18px;
  a {
    color: white;
    text-decoration: none;
    padding: 0px 2vw;
  }
  a:hover {
    color: #4e95e8;
    cursor: pointer;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 40px;
  margin-top: -10px;
  left: 10vw;
  width: 250px;
  z-index: 2;
`;

export default function NavBar() {
  return (
    <div>
      <Logo src={B2CleanLogo} />
      <Container>
        <Link to="/"></Link>
        <Link to="/services">Services</Link>
        <Link to="/covid">COVID-19</Link>
        <Link to="/contact">Contact</Link>
      </Container>
    </div>
  );
}
