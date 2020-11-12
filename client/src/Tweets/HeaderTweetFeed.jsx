import React from "react";
import { useFeed } from "../Contexts/FeedContext";
import { FiRepeat } from "react-icons/fi";
import moment from "moment";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const HeaderTweetFeed = ({ tweetId }) => {
  //consume context
  const { tweetsById } = useFeed();
  const history = useHistory();
  console.log({ tweetsById, author: tweetsById[tweetId] });

  const tweet = tweetsById[tweetId];
  if (!tweet) {
    return null;
  }
  //set const for the values we need
  const authorName = tweet["author"]["displayName"];
  const avatar = tweet["author"]["avatarSrc"];
  const handle = tweet["author"]["handle"];
  const timestamp = tweet["timestamp"];
  const date = moment(timestamp).format("MMM do");
  const tweeStatus = tweet["status"];
  const retweetValue = tweet["retweetFrom"];

  // handles
  const handleTweetDetail = (tweetId) => {
    history.push(`/tweet/${tweetId}`);
  };

  const handleProfile = (handle) => {
    history.push(`/${handle}`);
    console.log(handle);
  };

  return (
    <Wrapper>
      {retweetValue !== undefined && (
        <Retweeted>
          {" "}
          <span>
            <FiRepeat />
          </span>{" "}
          {tweetsById[tweetId]["retweetFrom"]["displayName"]} Remeowed{" "}
        </Retweeted>
      )}
      <AvAndInfoWrap>
        <div>
          <Avatar src={avatar} alt="avatar" />
        </div>
        <div>
          <p>
            <Name onClick={() => handleProfile(handle)}>{authorName}</Name>
            <Handle>@{handle}</Handle>
            <Date>{date}</Date>
          </p>
          <Status
            onClick={() => {
              handleTweetDetail(tweetId);
            }}
          >
            {tweeStatus}
          </Status>
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
