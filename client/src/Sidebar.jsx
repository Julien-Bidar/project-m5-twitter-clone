import React from "react";
import { ReactComponent as Logo } from "./asset/logo.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "./constants";
import { FiHome, FiBell, FiUser, FiBookmark } from "react-icons/fi";

const Sidebar = () => {
  return (
    <Wrapper>
      <LogoDiv>
        <Logo />
      </LogoDiv>
      <IconDiv>
        <StyledNavLink to="/home">
          {" "}
          <FiHome /> Home
        </StyledNavLink>
      </IconDiv>
      <IconDiv>
        <StyledNavLink to="/profile">
          {" "}
          <FiUser /> Profile
        </StyledNavLink>
      </IconDiv>
      <IconDiv>
        <StyledNavLink to="/notifications">
          {" "}
          <FiBell /> Notifications
        </StyledNavLink>
      </IconDiv>
      <IconDiv>
        <StyledNavLink to="/bookmarks">
          {" "}
          <FiBookmark /> Bookmarks
        </StyledNavLink>
      </IconDiv>
    </Wrapper>
  );
};

const StyledNavLink = styled(NavLink)`
  font-weight: 600;
  text-decoration: none;
  color: black;
  margin-left: 7px;
  padding: 7px 18px;

  &.active {
    color: ${COLORS.primary};
  }

  &:hover {
    background-color: rgba(76, 0, 255, 0.2);
    border-radius: 15px;
  }
`;

const Wrapper = styled.div`
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 40px;
  min-width: 220px;
`;

const LogoDiv = styled.div`
  padding: 10px 18px;
  display: flex;
  align-items: center;
`;

const IconDiv = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;

export default Sidebar;
