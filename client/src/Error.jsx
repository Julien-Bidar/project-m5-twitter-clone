import React from "react";
import styled from "styled-components";
import { ReactComponent as Bomb } from "./asset/macBomb.svg";

const Error = () => {
  return (
    <div>
      <Bomb />
      <p>Something went wrong try refreshing your browser</p>
    </div>
  );
};

export default Error;
