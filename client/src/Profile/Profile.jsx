import React from "react";
import styled from "styled-components";
import { UseCurrentUser } from "../Contexts/CurrentUserContext";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfos";

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
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
  margin-right: 20px;
  border: 1px solid grey;
`;

export default Profile;
