import React, { useState } from "react";
import styled from "styled-components";
import { UseCurrentUser } from "../Contexts/CurrentUserContext";
import { useFeed } from "../Contexts/FeedContext";

const TweetBox = () => {
  const { currentUser } = UseCurrentUser();
  const { fetchFeed } = useFeed();

  // value characters for input box
  const [value, setValue] = useState("");

  let charLeft = 280 - value.length;

  // setting the color for the num of char left
  let colorLimits = "black";

  if (charLeft > 55) {
    colorLimits = "black";
  } else if (charLeft <= 55 && charLeft > 0) {
    colorLimits = "rgb(250, 188, 1)";
  } else {
    colorLimits = "red";
  }

  //fetch API
  const postTweet = async () => {
    let response = await fetch("api/tweet", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: value }),
      method: "POST",
    });
    response = await response.json();
    console.log(response);
    await fetchFeed();
  };

  //handles
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handlePost = () => {
    postTweet();
    setValue("");
  };

  if (!currentUser) {
    return <p>loading...</p>;
  }
  const { avatarSrc } = currentUser.profile;
  return (
    <Wrapper>
      <Img src={avatarSrc} alt="avatar" />
      <BoxWrap>
        <Box
          placeholder="what's happening"
          onChange={(e) => handleInput(e)}
          value={value}
        ></Box>
        <Button onClick={handlePost}>Meow</Button>
        <Count style={{ color: colorLimits }}>{charLeft}</Count>
      </BoxWrap>
    </Wrapper>
  );
};

const Count = styled.p`
  position: absolute;
  bottom: 0;
  right: 80px;
`;

const BoxWrap = styled.div`
  position: relative;
  display: flex;
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Box = styled.textarea`
  border: solid 1px grey;
  position: relative;
  width: 550px;
  height: 250px;
`;

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
`;

const Img = styled.img`
  height: 75px;
  width: auto;
  border-radius: 50%;
`;

export default TweetBox;
