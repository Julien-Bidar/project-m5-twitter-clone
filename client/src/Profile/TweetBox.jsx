import React, { useEffect, useState } from "react";
import { COLORS } from "../constants";
import styled from "styled-components";
import { UseCurrentUser } from "../Contexts/CurrentUserContext";
import { useFeed } from "../Contexts/FeedContext";
import Loader from "../icons/Loading";
import Error from "../Error";

const TweetBox = () => {
  const { currentUser } = UseCurrentUser();
  const { fetchFeed } = useFeed();
  const [boxStatus, setBoxStatus] = useState("");

  // value characters for input box
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  let charLeft = 280 - value.length;

  useEffect(() => {
    if (charLeft > 278 || charLeft <= 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [charLeft]);

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
    try {
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
    } catch (err) {
      console.log(err);
      setBoxStatus("error");
    }
  };

  //handles
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.stopPropagation();
      handlePost(e);
    }
  };

  const handlePost = () => {
    postTweet();
    setValue("");
  };

  if (boxStatus === "error") {
    return (
      <ErrorWrap>
        <Error />
      </ErrorWrap>
    );
  }

  if (!currentUser) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  const { avatarSrc } = currentUser.profile;
  return (
    <>
      <HomeWrapper>
        <Span>Home</Span>
      </HomeWrapper>
      <Wrapper>
        <Img src={avatarSrc} alt="avatar" />
        <InputWrap>
          <InputArea
            aria-label="Write tweet"
            id="input"
            placeholder={"What's Happening?"}
            type="text"
            onChange={(e) => handleInput(e)}
          ></InputArea>
        </InputWrap>
        <BottomInfo>
          <Count style={{ color: colorLimits }}>{charLeft}</Count>
          <SubmitButton
            aria-label="Post tweet"
            disabled={disabled}
            onClick={handlePost}
            onKeyDown={handleKeyDown}
            tabIndex="0"
          >
            Meow
          </SubmitButton>
        </BottomInfo>
      </Wrapper>
    </>
  );
};

const ErrorWrap = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Span = styled.span`
  font-weight: bold;
`;

const HomeWrapper = styled.div`
  display: flex;
  padding: 20px;
  font-size: 22px;
  width: 100%;
  border-bottom: 1px solid grey;
`;

const Count = styled.p``;

const InputWrap = styled.div`
  height: 100%;
`;

const BottomInfo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
  right: 0;
  padding: 5px 20px;
`;

const InputArea = styled.textarea`
  width: 420px;
  height: 150px;
  border: none;
  font-family: sans-serif;
  font-size: 20px;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  box-sizing: border-box;
  width: 90px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  background: none;
  background-color: ${COLORS.primary};
  border-radius: 25px;
  color: white;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  margin-left: 10px;
  &:disabled {
    background-color: #ad91fd;
    cursor: not-allowed;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: 180px;
  padding: 20px 10px;
  border-bottom: 5px solid lightgrey;
`;

const Img = styled.img`
  height: 70px;
  width: auto;
  border-radius: 50%;
`;

export default TweetBox;
