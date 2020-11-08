import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bookmarks from "./Bookmarks";
import HomeFeed from "./HomeFeed";
import Notifications from "./Notifications";
import Profile from "./Profile";
import TweetDetails from "./TweetDetails";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomeFeed />
        </Route>
        <Route path="/">
          <HomeFeed />
        </Route>
        <Route path="/notifications">
          <Notifications />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route path="/tweet/:tweetId">
          <TweetDetails />
        </Route>
        <Route path="/:profileId">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
