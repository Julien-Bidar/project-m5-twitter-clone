import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UseCurrentUser } from "../Contexts/CurrentUserContext";
import { useHistory, useParams } from "react-router-dom";
import ProfileFeed from "./ProfileFeed";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfos";
import ProfileLinks from "./ProfileLinks";

const Profile = () => {
  const { currentUser } = UseCurrentUser();
  const { profileId } = useParams();
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({});
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (profileId === "profile" && currentUser) {
      setUserInfo(currentUser);
      setStatus("Idle");
    } else {
      fetchProfileInfo();
    }
  }, [profileId]);

  const fetchProfileInfo = async () => {
    let response = await fetch(`api/${profileId}/profile`);
    if (response) {
      response = await response.json();
      setUserInfo(response);
      setStatus("Idle");
    }
  };

  const back = () => {
    history.goBack();
  };

  return (
    <Wrapper>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <>
          <button onClick={back}>back</button>
          <ProfileHeader userInfo={userInfo} />
          <ProfileInfo userInfo={userInfo} />
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
