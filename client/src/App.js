import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Bookmarks from "./Bookmarks";
import Home from "./Home";
import Notifications from "./Notifications";
import Profile from "./Profile/Profile";
import TweetDetails from "./Tweets/TweetDetails";
import GlobalStyles from "./GlobalStyles";
import Sidebar from "./Sidebar";
import { CurrentUserProvider } from "./Contexts/CurrentUserContext";
import { FeedProvider } from "./Contexts/FeedContext";

const App = () => {
  return (
    <FeedProvider>
      <CurrentUserProvider>
        <Router>
          <GlobalStyles />
          <Wrapper>
            <div>
              <Sidebar />
            </div>
            <div>
              <Switch>
                <Route path="/home">
                  <Home />
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
            </div>
          </Wrapper>
        </Router>
      </CurrentUserProvider>
    </FeedProvider>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default App;
