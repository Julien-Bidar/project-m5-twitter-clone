import React from "react";
import { useFeed } from "./Contexts/FeedContext";
import TweetFeed from "./Tweets/TweetFeed";
import styled from "styled-components";

const Home = () => {
  const { tweetIds } = useFeed();
  return (
    <div>
      <Placeholder>
        {" "}
        Home Feed Placeholder for Meow box with profile pic
      </Placeholder>
      {tweetIds.map((tweetId) => {
        return <TweetFeed key={tweetId} tweetId={tweetId} />;
      })}
    </div>
  );
};

const Placeholder = styled.p`
  height: 200px;
  border: 1px solid grey;
  margin-top: 20px;
`;

export default Home;
