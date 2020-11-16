import React from "react";
import { UseCurrentUser } from "../Contexts/CurrentUserContext";
import styled from "styled-components";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import moment from "moment";
import Loader from "../icons/Loading";
import { COLORS } from "../constants";

const ProfileInfo = ({ userInfo }) => {
  // const { currentUser } = UseCurrentUser();
  if (!userInfo || userInfo.error === "user-not-found") {
    return <Loader />;
  }

  const {
    bio,
    displayName,
    handle,
    isFollowingYou,
    joined,
    location,
    numFollowers,
    numFollowing,
    isBeingFollowedByYou,
  } = userInfo.profile;

  const date = moment(joined).format("MMMM YYYY");

  return (
    <Wrapper>
      {isBeingFollowedByYou ? (
        <PurpleFollow>
          <ButtonFollowing>Following</ButtonFollowing>
        </PurpleFollow>
      ) : (
        <PurpleFollow>
          <ButtonFollow>Follow</ButtonFollow>
        </PurpleFollow>
      )}
      <Name>{displayName}</Name>
      <Handle>
        {" "}
        @{handle}{" "}
        <span>{isFollowingYou && <Follows>Follows you</Follows>}</span>
      </Handle>
      <Bio>{bio}</Bio>
      <LocAndDateWrap>
        <div>
          <FiMapPin />
          <LocAndDate>{location}</LocAndDate>
        </div>
        <div>
          <FiCalendar />
          <LocAndDate>Joined {date} </LocAndDate>
        </div>
      </LocAndDateWrap>
      <FollowWrap>
        <div>
          <NumFollow>
            {numFollowing} <Follow>Following</Follow>
          </NumFollow>
        </div>
        <div>
          <NumFollow>
            {numFollowers} <Follow>Followers</Follow>
          </NumFollow>
        </div>
      </FollowWrap>
    </Wrapper>
  );
};

const ButtonFollow = styled.button`
  background-color: transparent;
  border: 2px ${COLORS.primary} solid;
  padding: 10px;
  color: ${COLORS.primary};
  font-weight: bold;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonFollowing = styled.button`
  background: ${COLORS.primary};
  border: none;
  padding: 10px;
  color: white;
  font-weight: bold;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const PurpleFollow = styled.span`
  position: absolute;
  top: -60px;
  right: 20px;
`;

const Follows = styled.span`
  background-color: lightgray;
  padding: 5px 7px;
  border-radius: 4px;
`;

const NumFollow = styled.p`
  font-weight: bold;
`;

const Follow = styled.span`
  margin-right: 16px;
  color: #5f5d5d;
  font-weight: normal;
`;

const LocAndDate = styled.span`
  margin: 0 5px;
  margin-right: 17px;
  color: #5f5d5d;
  font-weight: bold;
`;

const Bio = styled.p`
  font-weight: 500;
  margin-top: 28px;
`;

const Handle = styled.p`
  color: #5f5d5d;
  margin: 20px 0;
  font-weight: bold;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 7px;
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 100px;
  margin-bottom: 20px;
  padding-left: 20px;
  width: 600px;
`;

const LocAndDateWrap = styled.div`
  display: flex;
  margin: 20px 0;
`;

const FollowWrap = styled.div`
  display: flex;
`;

export default ProfileInfo;
