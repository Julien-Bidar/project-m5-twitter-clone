import React from "react";
import { FiLoader } from "react-icons/fi";
import { IconContext } from "react-icons";
import styled, { keyframes } from "styled-components";
import Spinning from "./Spinning";

const Loader = () => {
  const spin = keyframes`
from {
    transform: rotate(0deg)
}
to {
    transform: rotate(360deg)
}
`;

  // const style = css`
  //   animation: ${spin} 5000ms linear infinite;
  // `;

  return (
    <IconContext.Provider
      value={{
        size: "1.5em",
      }}
    >
      <Spinning>
        <FiLoader />
      </Spinning>
    </IconContext.Provider>
  );
};

// const Spin = styled.div`
//   animation: ${spin} 5000ms linear infinite;
// `;

export default Loader;
