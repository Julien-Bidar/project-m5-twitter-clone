import React from "react";
import { useFeed } from "../Contexts/FeedContext";
import styled from "styled-components";

const MediaTweetFeed = ({ tweetId }) => {
  const { tweetsById } = useFeed();
  const media = tweetsById[tweetId]["media"];

  return (
    <Wrapper>
      {media.length > 0 && (
        <>
          <Media src={media[0].url} alt="" />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Media = styled.img`
  max-width: 500px;
  height: auto;
  border-radius: 5px;
`;

export default MediaTweetFeed;
