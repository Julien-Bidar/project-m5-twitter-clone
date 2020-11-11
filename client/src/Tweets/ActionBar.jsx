import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFeed } from "../Contexts/FeedContext";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";

const ActionBar = ({ tweet }) => {
  // consume context
  const { tweetsById } = useFeed();

  //use state
  const [numOfLikes, setNumOfLikes] = useState();
  const [numOfRetweets, setNumOfRetweets] = useState();
  const [isLiked, setIsLiked] = useState(tweetsById[tweet].isLiked);
  const [isRetweeted, setIsRetweeted] = useState(tweetsById[tweet].isRetweeted);
  useEffect(() => {
    setNumOfLikes(tweetsById[tweet].numOfLikes);
    setNumOfRetweets(tweetsById[tweet].numOfRetweets);
  }, [tweetsById]);

  //   const isRetweeted = tweetsById[tweet].isRetweeted;
  //   const isLiked = tweetsById[tweet].isLiked;

  // handles
  const handleToggleLike = () => {
    if (isLiked) {
      setNumOfLikes(numOfLikes - 1);
    } else {
      setNumOfLikes(numOfLikes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleToggleRetweet = () => {
    if (isRetweeted) {
      setNumOfRetweets(numOfRetweets - 1);
    } else {
      setNumOfRetweets(numOfRetweets + 1);
    }
    setIsRetweeted(!isRetweeted);
  };

  return (
    <Wrapper>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="reply" />
      </Action>
      <Action onClick={handleToggleRetweet} color="rgb(23, 191, 99)" size={40}>
        <TweetActionIcon
          kind="retweet"
          color={isRetweeted ? "rgb(23, 191, 99)" : undefined}
        />
        {/* {numOfRetweets > 0 && <span>{numOfRetweets}</span>} Not working */}
      </Action>
      <Action onClick={handleToggleLike} color="rgb(224, 36, 94)" size={40}>
        <TweetActionIcon
          kind="like"
          color={isRetweeted ? "rgb(224, 36, 94)" : undefined}
        />
        {/* {numOfLikes > 0 && <span>{numOfLikes}</span>} not working */}
      </Action>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="share" />
      </Action>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

export default ActionBar;
