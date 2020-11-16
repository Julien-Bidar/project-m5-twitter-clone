import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFeed } from "../Contexts/FeedContext";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";

const ActionBar = ({ tweetId }) => {
  // consume context
  const { tweetsById, fetchFeed } = useFeed();

  const tweet = tweetsById[tweetId];

  //use state
  const [numOfLikes, setNumOfLikes] = useState(tweet?.numLikes);
  const [numOfRetweets, setNumOfRetweets] = useState();
  const [isLiked, setIsLiked] = useState(tweet?.isLiked ?? false); //optional  chaining with nullish coalescing
  const [isRetweeted, setIsRetweeted] = useState(tweet?.isRetweeted ?? false);

  // handles and PUT
  const handleToggleLike = async () => {
    //UI/UX part of like
    if (isLiked) {
      setNumOfLikes(numOfLikes - 1);
    } else {
      setNumOfLikes(numOfLikes + 1);
    }
    setIsLiked(!isLiked);

    //API post to update tweet
    try {
      let response = await fetch(`/api/tweet/${tweetId}/like`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ like: !isLiked }),
        method: "PUT",
      });
      response = await response.json();
      console.log(tweetId);
      await fetchFeed();
    } catch (err) {
      console.log(err);
    }
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
      <Action color="rgb(27, 149, 224)" size={40} tabIndex="0">
        <TweetActionIcon kind="reply" />
      </Action>
      <Action
        onClick={(e) => handleToggleRetweet(e)}
        color="rgb(23, 191, 99)"
        size={40}
        tabIndex="0"
      >
        <TweetActionIcon
          kind="retweet"
          color={isRetweeted ? "rgb(23, 191, 99)" : undefined}
        />
        {/* {numOfRetweets > 0 && <Stats>{numOfRetweets}</Stats>} */}
      </Action>
      <IconAndStats>
        <Action
          onClick={handleToggleLike}
          color="rgb(224, 36, 94)"
          size={40}
          tabIndex="0"
        >
          <TweetActionIcon
            kind="like"
            color={isLiked ? "rgb(224, 36, 94)" : undefined}
          />
        </Action>
        <Stats
          style={
            numOfLikes > 0 ? { display: "block" } : { visibility: "hidden" }
          }
        >
          {numOfLikes}
        </Stats>
      </IconAndStats>
      <Action color="rgb(27, 149, 224)" size={40} tabIndex="0">
        <TweetActionIcon kind="share" />
      </Action>
    </Wrapper>
  );
};

const IconAndStats = styled.span`
  display: flex;
  align-items: center;
`;

const Stats = styled.span`
  margin-left: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

export default ActionBar;
