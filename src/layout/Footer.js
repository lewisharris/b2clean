import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import P from "../elements/P";

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: #1c5598;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 100px 0px 0px 0px;
  padding: 50px 20px;
  @media only screen and (max-width: 540px) {
    justify-content: flex-start;
  }
  a {
    color: white;
    text-decoration: none;
    padding: 0px 2vw;
  }
  a:hover {
    color: #41deff;
    cursor: pointer;
  }
`;

const Segment = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
  @media only screen and (max-width: 540px) {
  }
`;
export default function Footer() {
  let windowWidth = window.innerWidth;

  window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;
  });

  return (
    <Container>
      <Segment>
        <P close>07968624375</P>
        <P close>enquiries@sirrahclean.co.uk</P>
        <br></br>
        <P close>SIRRAHCLEAN LTD</P>
        <P close>Malvern House</P>
        <P close>New Road</P>
        <P close>Solihull</P>
        <P close>B91 3DL</P>
      </Segment>
      {windowWidth >= 500 ? (
        <Segment>
          <Link to="/services">Services</Link>
          <Link to="/covid">COVID19</Link>
          <Link to="/contact">Contact</Link>
        </Segment>
      ) : null}
    </Container>
  );
}
