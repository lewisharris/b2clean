import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 25px;
  border-radius: 25px;
  height: 50px;
  border: 2px solid #4e95e8;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
  @media only screen and (max-height: 700px) {
    display: none;
  }
`;

const Scroller = styled.div`
  width: 4px;
  height: 10px;
  background: white;
  margin: 0px auto;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
  animation: scroll 1s linear 0s infinite forwards;
  @keyframes scroll {
    0% {
      top: 10px;
      opacity: 1;
    }
    50% {
      top: 16px;
      opacity: 1;
    }
    100% {
      top: 10px;
      opacity: 1;
    }
  }
`;

export default function MouseScroll() {
  return (
    <div>
      <Container>
        <Scroller></Scroller>
      </Container>
    </div>
  );
}
