import React, { useEffect, useState } from "react";
import styled from "styled-components";
//import { UseCurrentUser } from "../Contexts/CurrentUserContext";
import { useHistory, useParams } from "react-router-dom";
import ProfileFeed from "./ProfileFeed";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfos";
import ProfileLinks from "./ProfileLinks";
import Loader from "../icons/Loading";
import Error from "../Error";
import { FiArrowLeft } from "react-icons/fi";
import { IconContext } from "react-icons";

const Profile = () => {
  //const { currentUser } = UseCurrentUser();
  const { profileId } = useParams();
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({});
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (profileId === "profile") {
      fetchProfileInfo("me");
    } else {
      fetchProfileInfo(profileId);
    }
  }, [profileId]);

  //console.log({ currentUser: currentUser });

  const fetchProfileInfo = async (handle) => {
    try {
      let response = await fetch(`api/${handle}/profile`);
      response = await response.json();
      console.log({ response: response });
      if (!response.error) {
        setUserInfo(response);
        setStatus("Idle");
      }
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  };

  const back = () => {
    history.goBack();
  };

  if (status === "error") {
    return (
      <ErrorWrap>
        <Error />
      </ErrorWrap>
    );
  }

  return (
    <Wrapper>
      <BackWrapper>
        <Button onClick={back}>
          <IconContext.Provider
            value={{
              size: "1.5em",
              color: "grey",
            }}
          >
            <FiArrowLeft />
          </IconContext.Provider>
          <Span>Meow</Span>
        </Button>
      </BackWrapper>
      {status === "loading" ? (
        <LoaderWrap>
          <Loader />
        </LoaderWrap>
      ) : (
        <>
          <ProfileHeader userInfo={userInfo} />
          <ProfileInfo userInfo={userInfo} />
          <ProfileLinks />
          <ProfileFeed />
        </>
      )}
    </Wrapper>
  );
};

const ErrorWrap = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoaderWrap = styled.div`
  padding: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-bottom: 1px solid grey;
`;

const Span = styled.span`
  margin-left: 18px;
  font-weight: bold;
  display: inline-block;
`;

const Button = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  width: 602px;
  margin-bottom: 20px;
  border: 1px solid grey;
`;

export default Profile;
