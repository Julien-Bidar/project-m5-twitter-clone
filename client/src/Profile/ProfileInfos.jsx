import React from "react";
import { UseCurrentUser } from "../Contexts/CurrentUserContext";
import styled from "styled-components";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import moment from "moment";

const ProfileInfo = ({ userInfo }) => {
  // const { currentUser } = UseCurrentUser();
  if (!userInfo) {
    return <p>Loading...</p>;
  }
  console.log({ userInfo: userInfo });

  const {
    bio,
    displayName,
    handle,
    isFollowingYou,
    joined,
    location,
    numFollowers,
    numFollowing,
  } = userInfo.profile;

  const date = moment(joined).format("MMMM YYYY");

  return (
    <Wrapper>
      <Name>{displayName}</Name>
      <Handle>
        {" "}
        @{handle} <span>{isFollowingYou && <p>Follows you</p>}</span>
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
  margin-top: 16px;
`;

const Handle = styled.p`
  color: #5f5d5d;
  margin-bottom: 7px;
  font-weight: bold;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 7px;
`;

const Wrapper = styled.div`
  margin-top: 12vw;
  margin-bottom: 20px;
  padding-left: 28px;
`;

const LocAndDateWrap = styled.div`
  display: flex;
  margin: 20px 0;
`;

const FollowWrap = styled.div`
  display: flex;
`;

export default ProfileInfo;
