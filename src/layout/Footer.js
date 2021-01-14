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
`;
export default function Footer() {
  return (
    <Container>
      <Segment>
        <Link to="/services">Services</Link>
        <Link to="/covid">COVID19</Link>
        <Link to="/contact">Contact</Link>
      </Segment>
      <Segment>
        <P close>B2Clean ltd</P>
        <P close>Malvern House</P>
        <P close>New Road</P>
        <P close>Solihull</P>
        <P close>B91 3DL</P>
      </Segment>
      <Segment>
        <P close>07968624375</P>
        <P close>enquiries@b2clean.co.uk</P>
      </Segment>
    </Container>
  );
}
