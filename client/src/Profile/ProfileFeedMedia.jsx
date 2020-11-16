import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ProfileFeedMedia = ({ tweetId, tweetsById }) => {
  const tweet = tweetsById[tweetId];
  const history = useHistory();
  if (!tweet) {
    return null;
  }
  const media = tweet["media"];

  //handle
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
    <Wrapper
      onClick={(e) => {
        handleTweetDetail(tweetId, e);
      }}
      onKeyDown={(e) => keyDown(tweetId, e)}
    >
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
  width: 580px;
`;

const Media = styled.img`
  width: 505px;
  height: auto;
  border-radius: 5px;
`;

export default ProfileFeedMedia;
