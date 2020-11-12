import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import TweetFeed from "../Tweets/TweetFeed";
import { UseCurrentUser } from "../Contexts/CurrentUserContext";

const ProfileFeed = () => {
  // consume current user context
  const { currentUser } = UseCurrentUser();

  // status state + tweetIds and tweets targeted user
  const [status, setStatus] = useState("Loading");
  const [tweetIds, setTweetIds] = useState([]);
  const [tweetsById, setTweetsById] = useState({});

  //getting handle for targetted user setting default tu currentUer
  let { profileId } = useParams();
  if (profileId === "profile") {
    profileId = currentUser.profile.handle;
  }
  console.log(profileId);
  console.log(tweetIds);

  //fetching targeted user's data
  const handleFetchTweetsId = async () => {
    let response = await fetch(`/api/${profileId}/feed`);
    response = await response.json();
    setTweetIds(response.tweetIds);
    setStatus("Idle");
    setTweetsById(response.tweetsById);
  };

  useEffect(() => {
    handleFetchTweetsId();
  }, [profileId]);

  return (
    <Wrapper>
      {status === "Loading" ? (
        <p>Loading...</p>
      ) : (
        tweetIds.map((tweetId) => {
          return <TweetFeed key={tweetId} tweetId={tweetId} />;
        })
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 20px;
`;

export default ProfileFeed;
