import React from "react";
import { useFeed } from "./Contexts/FeedContext";
import TweetFeed from "./Tweets/TweetFeed";
import styled from "styled-components";
import TweetBox from "./Profile/TweetBox";
import Loader from "./icons/Loading";
import Error from "./Error";

const Home = () => {
  const { tweetIds, feedStatus } = useFeed();

  if (feedStatus === "error") {
    return (
      <ErrorWrap>
        <Error />
      </ErrorWrap>
    );
  }

  return (
    <Wrapper>
      {feedStatus === "loading" && (
        <LoaderWrap>
          <Loader />
        </LoaderWrap>
      )}
      <TweetBox />
      {tweetIds.map((tweetId) => {
        return <TweetFeed key={tweetId} tweetId={tweetId} />;
      })}
    </Wrapper>
  );
};

const ErrorWrap = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  border-right: 1px solid grey;
  border-left: 1px solid grey;
`;

const LoaderWrap = styled.div``;

export default Home;
