import React from "react";
import styled from "styled-components";
import { UseCurrentUser } from "../Contexts/CurrentUserContext";
import { NavLink } from "react-router-dom";
import { COLORS } from "../constants";

const ProfileLinks = () => {
  return (
    <>
      <Wrapper>
        <Links to="#">Tweet</Links>
        <Links to="#">Media</Links>
        <Links to="#">Likes</Links>
      </Wrapper>
      <hr />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
`;

const Links = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: black;

  /* &.active {
    color: ${COLORS.primary};
  } */
`;

export default ProfileLinks;
