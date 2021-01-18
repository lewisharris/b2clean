import React, { useState } from "react";
import styled from "styled-components";

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

const Menu = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  z-index: 10;
  display: sticky;
  top: 0px;
  left: 0px;
  overflow: hidden;
`;
const Leave = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  color: white;
  font-size: 24px;
  z-index: 10;
`;

const Ul = styled.ul`
  position: absolute;
  top: 20px;
  right: 30px;
`;
const Li = styled.li`
  color: white;
`;

export default function Hamburger() {
  const [visible, setVisible] = useState(true);
  function handleToggle() {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    console.log(visible);
  }

  return visible === true ? (
    <Bun onClick={handleToggle}>
      <Layer></Layer>
      <Layer></Layer>
      <Layer></Layer>
    </Bun>
  ) : (
    <Menu>
      <Ul>
        <Li>Services</Li>
        <Li>Covid</Li>
        <Li>Contact</Li>
      </Ul>
      <Leave onClick={handleToggle}>X</Leave>
    </Menu>
  );
}
