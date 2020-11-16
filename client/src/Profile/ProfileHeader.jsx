import React from "react";
import styled from "styled-components";
import Loader from "../icons/Loading";

const ProfileHeader = ({ userInfo }) => {
  if (!userInfo || userInfo.error === "user-not-found") {
    return null;
  }
  const { avatarSrc, bannerSrc } = userInfo.profile;

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
  width: 150px;
  position: absolute;
  top: 66%;
  left: 5%;
`;

const Wrapper = styled.div`
  position: relative;
  width: 600px;
`;

export default ProfileHeader;
