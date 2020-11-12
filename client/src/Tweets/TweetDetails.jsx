import React from "react";
import styled from "styled-components";
import MediaTweetFeed from "./MediaTweetFeed";
import ActionBar from "./ActionBar";
import { useParams } from "react-router-dom";
import { useFeed } from "../Contexts/FeedContext";
import moment from "moment";

const TweetDetails = ({}) => {
  const { tweetId } = useParams();
  const { tweetsById } = useFeed();
  console.log(tweetId);

  //set const for the values we need
  const authorName = tweetsById[tweetId]["author"]["displayName"];
  const avatar = tweetsById[tweetId]["author"]["avatarSrc"];
  const handle = tweetsById[tweetId]["author"]["handle"];
  const timestamp = tweetsById[tweetId]["timestamp"];
  const date = moment(timestamp).format("h:mm a MMM do Y");
  const tweetStatus = tweetsById[tweetId]["status"];
  const retweetValue = tweetsById[tweetId]["retweetFrom"]; // add retweet

  return (
    <div>
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
