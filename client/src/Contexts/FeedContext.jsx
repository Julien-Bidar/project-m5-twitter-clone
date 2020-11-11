import React, { createContext, useContext, useState, useEffect } from "react";

const FeedContext = createContext(null);
export const useFeed = () => useContext(FeedContext);

export const FeedProvider = ({ children }) => {
  const [tweetIds, setTweetIds] = useState([]);
  const [tweetsById, setTweetsById] = useState({});
  const [feedStatus, setFeedStatus] = useState("loading");

  // fetch data
  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const tweetIds = data["tweetIds"];
        const tweetsById = data["tweetsById"];
        setTweetIds(tweetIds);
        setTweetsById(tweetsById);
        console.log(tweetsById);
        setFeedStatus("idle");
      });
  }, []);

  return (
    <FeedContext.Provider value={{ tweetIds, tweetsById, feedStatus }}>
      {children}
    </FeedContext.Provider>
  );
};
