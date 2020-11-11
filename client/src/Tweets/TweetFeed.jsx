import React from "react";
import { useFeed } from "../Contexts/FeedContext";
import ActionBar from "./ActionBar";
import HeaderTweetFeed from "./HeaderTweetFeed";
import MediaTweetFeed from "./MediaTweetFeed";
import styled from "styled-components";

const TweetFeed = ({ tweet }) => {
  const { feedStatus } = useFeed();

  return (
    <div>
      {feedStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <FeedWrapper>
          <HeaderTweetFeed tweet={tweet} />
          <MediaTweetFeed tweet={tweet} />
          <ActionBar tweet={tweet} />
        </FeedWrapper>
      )}
    </div>
  );
};

const FeedWrapper = styled.div`
  width: 570px;
`;

export default TweetFeed;
