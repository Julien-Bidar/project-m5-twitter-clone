import React from "react";
import styled from "styled-components";
import HeaderTweetFeed from "./HeaderTweetFeed";
import MediaTweetFeed from "./HeaderTweetFeed";
import ActionBar from "./HeaderTweetFeed";
import { useParams } from "react-router-dom";

const TweetDetails = ({}) => {
  const { tweetId } = useParams();
  console.log(tweetId);
  return (
    <div>
      <FeedWrapper>
        {/* <HeaderTweetFeed tweetId={tweetId} /> */}
        {/* <MediaTweetFeed tweetId={tweetId} /> */}
        <ActionBar tweetId={tweetId} />
      </FeedWrapper>
    </div>
  );
};

const FeedWrapper = styled.div`
  width: 570px;
`;

export default TweetDetails;
