import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { UseCurrentUser } from "../Contexts/CurrentUserContext";
import Loader from "../icons/Loading";
import ProfileFeedHeader from "./ProfileFeedHeader";
import ActionBar from "../Tweets/ActionBar";
import ProfileFeedMedia from "./ProfileFeedMedia";

const ProfileFeed = () => {
  // consume current user context
  const { currentUser } = UseCurrentUser();
  const { history } = useHistory();

  // status state + tweetIds and tweets targeted user
  const [status, setStatus] = useState("Loading");
  const [tweetIds, setTweetIds] = useState([]);
  const [tweetsById, setTweetsById] = useState({});

  //getting handle for targetted user setting default tu currentUer
  let { profileId } = useParams();
  if (profileId === "profile" && currentUser) {
    profileId = currentUser.profile.handle;
  }

  //handles
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
        <Loader />
      ) : (
        tweetIds.map((tweetId) => {
          return (
            <FeedWrapper
              key={`wrapper-${tweetId}`}
              onKeyDown={(e) => keyDown(tweetId, e)}
              tabIndex="0"
              aria-label="view tweet"
            >
              {/* <TweetFeed key={tweetId} tweetId={tweetId} /> */}
              <ProfileFeedHeader
                key={tweetId}
                tweetId={tweetId}
                tweetsById={tweetsById}
                handleTweetDetail={handleTweetDetail}
                keyDown={keyDown}
              />
              <ProfileFeedMedia
                key={`media-${tweetId}`}
                tweetId={tweetId}
                tweetsById={tweetsById}
                handleTweetDetail={handleTweetDetail}
                keyDown={keyDown}
              />
              <ActionBar tweetId={tweetId} key={`actionBar-${tweetId}`} />
            </FeedWrapper>
          );
        })
      )}
    </Wrapper>
  );
};

const FeedWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid grey;
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  width: 600px;
`;

export default ProfileFeed;
