import React from "react";
import { UseCurrentUser } from "../Contexts/CurrentUserContext";
import styled from "styled-components";

const ProfileHeader = () => {
  const { currentUser } = UseCurrentUser();
  const { avatarSrc, bannerSrc } = currentUser.profile;

  return (
    <Wrapper>
      <Avatar src={avatarSrc} alt="avata pic" />
      <Banner src={bannerSrc} alt="banner picture" />
    </Wrapper>
  );
};

const Banner = styled.img`
  width: 100%;
  height: auto;
`;

const Avatar = styled.img`
  border-radius: 50%;
  border: solid white 4px;
  height: auto;
  width: 18vw;
  position: absolute;
  top: 66%;
  left: 5%;
`;

const Wrapper = styled.div`
  position: relative;
`;

export default ProfileHeader;
