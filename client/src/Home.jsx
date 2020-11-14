import React from "react";
import { useFeed } from "./Contexts/FeedContext";
import TweetFeed from "./Tweets/TweetFeed";
import styled from "styled-components";
import TweetBox from "./Profile/TweetBox";

const Home = () => {
  const { tweetIds } = useFeed();
  return (
    <div>
      <TweetBox />
      {tweetIds.map((tweetId) => {
        return <TweetFeed key={tweetId} tweetId={tweetId} tabIndex="0" />;
      })}
    </div>
  );
};

export default Home;
