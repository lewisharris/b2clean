import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import B2CleanLogo from "../images/b2clean-logo.png";
import Hamburger from "./Hamburger";

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
  @media only screen and (max-width: 540px) {
    flex-direction: column;
    justify-content: flex-start;
    text-align: right;
    padding-right: 10vw;
    line-height: 1.5;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 40px;
  margin-top: -10px;
  left: 10vw;
  width: 250px;
  z-index: 2;
  @media only screen and (max-width: 400px) {
    top: 20px;
    width: 150px;
  }
`;

export default function NavBar() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 500;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width >= breakpoint ? (
    <>
      <Logo src={B2CleanLogo} />
      <Container>
        <Link to="/"></Link>
        <Link to="/services">Services</Link>
        <Link to="/covid">COVID-19</Link>
        <Link to="/contact">Contact</Link>
      </Container>
    </>
  ) : (
    <>
      <Logo src={B2CleanLogo} />
      <Hamburger />
    </>
  );
}
