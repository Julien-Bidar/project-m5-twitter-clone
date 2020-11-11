import React from "react";
import { useFeed } from "../Contexts/FeedContext";
import { FiRepeat } from "react-icons/fi";
import moment from "moment";
import styled from "styled-components";

const HeaderTweetFeed = ({ tweet }) => {
  const { tweetsById } = useFeed();
  const authorName = tweetsById[tweet]["author"]["displayName"];
  const avatar = tweetsById[tweet]["author"]["avatarSrc"];
  const handle = tweetsById[tweet]["author"]["handle"];
  const timestamp = tweetsById[tweet]["timestamp"];
  const date = moment(timestamp).format("MMM do");
  const tweeStatus = tweetsById[tweet]["status"];

  const retweetValue = tweetsById[tweet]["retweetFrom"];
  //const retweetName = tweetsById[tweet]["retweetFrom"]["displayName"];

  return (
    <Wrapper>
      {retweetValue !== undefined && (
        <Retweeted>
          {" "}
          <span>
            <FiRepeat />
          </span>{" "}
          {tweetsById[tweet]["retweetFrom"]["displayName"]} Remeowed{" "}
        </Retweeted>
      )}
      <AvAndInfoWrap>
        <div>
          <Avatar src={avatar} alt="avatar" />
        </div>
        <div>
          <p>
            <Name>{authorName}</Name>
            <Handle>@{handle}</Handle>
            <Date>{date}</Date>
          </p>
          <Status>{tweeStatus}</Status>
        </div>
      </AvAndInfoWrap>
    </Wrapper>
  );
};

const Status = styled.p`
  margin-top: 24px;
  margin-left: 7px;
  margin-bottom: 7px;
`;

const Date = styled.span`
  color: #5f5d5d;
  font-weight: bold;
`;

const Handle = styled.span`
  color: #5f5d5d;
  font-weight: bold;
  margin-right: 7px;
`;

const Name = styled.span`
  font-weight: bold;
  margin: 0 7px;
`;

const Retweeted = styled.p`
  color: #5f5d5d;
  margin-left: 77px;
  margin-bottom: 18px;
`;

const Wrapper = styled.div`
  margin-top: 44px;
`;

const Avatar = styled.img`
  height: 70px;
  width: auto;
  border-radius: 50%;
`;

const AvAndInfoWrap = styled.div`
  display: flex;
`;
export default HeaderTweetFeed;
