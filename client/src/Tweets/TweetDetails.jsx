import React from "react";
import styled from "styled-components";
import MediaTweetFeed from "./MediaTweetFeed";
import ActionBar from "./ActionBar";
import { useHistory, useParams } from "react-router-dom";
import { useFeed } from "../Contexts/FeedContext";
import moment from "moment";
import Loader from "../icons/Loading";
import { FiArrowLeft, FiRepeat } from "react-icons/fi";
import { IconContext } from "react-icons";

const TweetDetails = ({}) => {
  const { tweetId } = useParams();
  const { tweetsById } = useFeed();
  const history = useHistory();
  const tweet = tweetsById[tweetId];
  const media = tweet["media"];

  if (!tweet) {
    return <Loader />;
  }

  //set const for the values we need
  const authorName = tweet["author"]["displayName"];
  const avatar = tweet["author"]["avatarSrc"];
  const handle = tweet["author"]["handle"];
  const timestamp = tweet["timestamp"];
  const date = moment(timestamp).format("h:mm a MMM Do Y");
  const tweetStatus = tweet["status"];
  const retweetValue = tweet["retweetFrom"]; // add retweet

  const back = () => {
    history.goBack();
  };

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
      {retweetValue !== undefined && (
        <Retweeted>
          {" "}
          <span>
            <FiRepeat />
          </span>{" "}
          {tweetsById[tweetId]["retweetFrom"]["displayName"]} Remeowed{" "}
        </Retweeted>
      )}
      <FeedWrapper>
        <HeaderWrapper>
          <div>
            {" "}
            <Avatar src={avatar} alt="" />
          </div>
          <AuthorAndHandleWrap>
            {" "}
            <Author>{authorName}</Author>
            <Handle>@{handle}</Handle>
          </AuthorAndHandleWrap>
        </HeaderWrapper>
        <Status>{tweetStatus}</Status>
        <MediaWrapper>
          {media.length > 0 && (
            <>
              <Media src={media[0].url} alt="" />
            </>
          )}
        </MediaWrapper>
        <Date>{date}</Date>
        <hr />
        <ActionBar tweetId={tweetId} />
      </FeedWrapper>
    </Wrapper>
  );
};

const Date = styled.p`
  margin: 15px 0;
  color: grey;
`;

const Status = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
`;

const Author = styled.p`
  font-weight: bold;
`;

const Handle = styled.p`
  padding-top: 10px;
  color: grey;
`;

const AuthorAndHandleWrap = styled.div`
  margin-left: 15px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const MediaWrapper = styled.div`
  width: 600px;
`;

const Media = styled.img`
  min-width: 580px;
  max-width: 580px;
  height: auto;
  border-radius: 5px;
`;

const Avatar = styled.img`
  height: 70px;
  width: auto;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  border-bottom: 1px solid grey;
  border-right: 1px solid grey;
  border-left: 1px solid grey;
  width: 600px;
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

const FeedWrapper = styled.div`
  padding: 15px 10px;
  width: 600px;
`;

const Retweeted = styled.p`
  color: #5f5d5d;
  margin-top: 15px;
  padding-left: 10px;
`;

export default TweetDetails;
