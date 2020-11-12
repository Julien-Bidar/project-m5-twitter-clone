import React from "react";
import styled from "styled-components";
import { useFeed } from "../Contexts/FeedContext";
import ActionBar from "./ActionBar";
import HeaderTweetFeed from "./HeaderTweetFeed";
import MediaTweetFeed from "./MediaTweetFeed";

const TweetFeed = ({ tweetId }) => {
  const { feedStatus } = useFeed();

  return (
    <div>
      {feedStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <FeedWrapper>
          <HeaderTweetFeed tweetId={tweetId} />
          <MediaTweetFeed tweetId={tweetId} />
          <ActionBar tweetId={tweetId} />
        </FeedWrapper>
      )}
    </div>
  );
};

const FeedWrapper = styled.div`
  width: 570px;
`;

export default TweetFeed;
