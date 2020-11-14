import React from "react";
import styled from "styled-components";
import MediaTweetFeed from "./MediaTweetFeed";
import ActionBar from "./ActionBar";
import { useHistory, useParams } from "react-router-dom";
import { useFeed } from "../Contexts/FeedContext";
import moment from "moment";

const TweetDetails = ({}) => {
  const { tweetId } = useParams();
  const { tweetsById } = useFeed();
  const history = useHistory();
  const tweet = tweetsById[tweetId];
  if (!tweet) {
    return <p>loading...</p>;
  }

  //set const for the values we need
  const authorName = tweet["author"]["displayName"];
  const avatar = tweet["author"]["avatarSrc"];
  const handle = tweet["author"]["handle"];
  const timestamp = tweet["timestamp"];
  const date = moment(timestamp).format("h:mm a MMM do Y");
  const tweetStatus = tweet["status"];
  const retweetValue = tweet["retweetFrom"]; // add retweet

  const back = () => {
    history.goBack();
  };

  return (
    <div>
      <button onClick={back}>back</button>
      <FeedWrapper>
        <div>
          <div>
            {" "}
            <img src={avatar} alt="" />
          </div>
          <div>
            {" "}
            <p>{authorName}</p>
            <p>@{handle}</p>
          </div>
        </div>
        <p>{tweetStatus}</p>
        <MediaTweetFeed tweetId={tweetId} />
        <p>{date}</p>
        <ActionBar tweetId={tweetId} />
      </FeedWrapper>
    </div>
  );
};

const FeedWrapper = styled.div`
  width: 570px;
`;

export default TweetDetails;
