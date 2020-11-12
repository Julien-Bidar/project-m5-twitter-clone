import React from "react";
import styled from "styled-components";
import { UseCurrentUser } from "../Contexts/CurrentUserContext";
import ProfileFeed from "./ProfileFeed";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfos";
import ProfileLinks from "./ProfileLinks";

const Profile = () => {
  const { status } = UseCurrentUser();

  return (
    <Wrapper>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <>
          <ProfileHeader />
          <ProfileInfo />
          <ProfileLinks />
          <ProfileFeed />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
  margin-right: 40px;
  margin-bottom: 20px;
  border: 1px solid grey;
`;

export default Profile;
