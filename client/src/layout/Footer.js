import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: #4283ac;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 50px 0px;
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
  margin: 0px 20vw;
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
        <div>B2Clean ltd</div>
        <div>Malvern House</div>
        <div>New Road</div>
        <div>Solihull</div>
        <div>B91 3DL</div>
      </Segment>
    </Container>
  );
}
