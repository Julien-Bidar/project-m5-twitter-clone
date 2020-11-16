import React from "react";
import styled from "styled-components";
import { UseCurrentUser } from "../Contexts/CurrentUserContext";
import { NavLink } from "react-router-dom";
import { COLORS } from "../constants";

const ProfileLinks = () => {
  return (
    <>
      <BtnDiv>
        <Button aria-label="See user tweet" tabIndex="0" autofocus>
          Tweets
        </Button>
        <Button tabIndex="0">Media</Button>
        <Button tabIndex="0">Likes</Button>
      </BtnDiv>
    </>
  );
};

const BtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  border-bottom: 1px solid grey;
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 33.1%;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  background: none;
  color: #707070;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  border-bottom: 3px solid transparent;
  &:hover {
    color: ${COLORS.primary};
    border-bottom: 3px solid ${COLORS.primary};
  }
`;

export default ProfileLinks;
