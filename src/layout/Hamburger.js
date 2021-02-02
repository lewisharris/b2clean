import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Bun = styled.div`
  position: absolute;
  top: 28px;
  right: 30px;
  z-index: 4;
  cursor: pointer;
`;

const Layer = styled.div`
  width: 20px;
  height: 2px;
  background: white;
  margin: 6px auto;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 9;
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.5);
`;

const Menu = styled.div`
  width: 50vw;
  height: 100vh;
  background: black;
  z-index: 10;
  position: fixed;
  top: 0px;
  right: 0px;
  overflow: hidden;
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
const Leave = styled.div`
  position: absolute;
  bottom: 30px;
  right: 50%;
  transform: translateX(50%);
  border-radius: 500px;
  color: white;
  font-size: 24px;
  z-index: 10;
  background: green;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 26px;
  font-family: helvetica, arial, sans-serif;
`;

const Ul = styled.ul`
  position: absolute;
  top: 20px;
  right: 30px;
  z-index: 10;
  list-style-type: none;
`;
const Li = styled.li`
  color: white;
  font-size: 24px;
  line-height: 48px;
  text-decoration: none;
`;

export default function Hamburger() {
  const [visible, setVisible] = useState(true);
  function handleToggle() {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  return visible === true ? (
    <Bun onClick={handleToggle}>
      <Layer></Layer>
      <Layer></Layer>
      <Layer></Layer>
    </Bun>
  ) : (
    <Menu>
      <Overlay onClick={handleToggle} />
      <Ul>
        <Link to="/services" replace onClick={handleToggle}>
          <Li>Services</Li>
        </Link>
        <Link to="/covid" replace onClick={handleToggle}>
          <Li>Covid</Li>
        </Link>
        <Link to="/contact" replace onClick={handleToggle}>
          <Li>Contact</Li>
        </Link>
      </Ul>
      <Leave onClick={handleToggle}>x</Leave>
    </Menu>
  );
}
