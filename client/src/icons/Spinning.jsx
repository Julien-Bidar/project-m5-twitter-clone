import React from "react";
import styled, { keyframes } from "styled-components";

const Spinning = ({ children }) => {
  return <Spin>{children}</Spin>;
};

const spin = keyframes`
from {
    transform: rotate(0deg)
}
to {
    transform: rotate(360deg)
}
`;

const Spin = styled.div`
  animation: ${spin} 3000ms linear infinite;
  position: absolute;
`;

export default Spinning;
