import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useFeed } from "../Contexts/FeedContext";
import Loader from "../icons/Loading";
import ActionBar from "./ActionBar";
import HeaderTweetFeed from "./HeaderTweetFeed";
import MediaTweetFeed from "./MediaTweetFeed";

const TweetFeed = ({ tweetId }) => {
  const { feedStatus } = useFeed();
  const history = useHistory();

  const handleTweetDetail = (tweetId, e) => {
    e.stopPropagation();
    history.push(`/tweet/${tweetId}`);
  };

  const keyDown = (tweetId, e) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      history.push(`/tweet/${tweetId}`);
    }
  };

  return (
    <div
      onKeyDown={(e) => keyDown(tweetId, e)}
      tabIndex="0"
      aria-label="view tweet"
    >
      {feedStatus === "loading" ? (
        <Loader />
      ) : (
        <FeedWrapper>
          <HeaderTweetFeed
            tweetId={tweetId}
            handleTweetDetail={handleTweetDetail}
            keyDown={keyDown}
          />
          <MediaTweetFeed
            tweetId={tweetId}
            handleTweetDetail={handleTweetDetail}
          />
          <ActionBar tweetId={tweetId} />
        </FeedWrapper>
      )}
    </div>
  );
};

const FeedWrapper = styled.div`
  width: 600px;
  padding: 10px;
  border-bottom: 1px solid grey;

  &:hover {
    cursor: pointer;
  }
`;

export default TweetFeed;
