import React, { createContext, useContext, useState, useEffect } from "react";

const FeedContext = createContext(null);
export const useFeed = () => useContext(FeedContext);

export const FeedProvider = ({ children }) => {
  const [tweetIds, setTweetIds] = useState([]);
  const [tweetsById, setTweetsById] = useState({});
  const [feedStatus, setFeedStatus] = useState("loading");

  const fetchFeed = async () => {
    let data = await fetch("/api/me/home-feed");
    data = await data.json();
    const tweetIds = data["tweetIds"];
    const tweetsById = data["tweetsById"];
    setTweetIds(tweetIds);
    setTweetsById(tweetsById);
    setFeedStatus("idle");
  };
  // fetch data
  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <FeedContext.Provider
      value={{ tweetIds, tweetsById, feedStatus, fetchFeed }}
    >
      {children}
    </FeedContext.Provider>
  );
};
