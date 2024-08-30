import { Stack, Typography, Button } from "@mui/material";
import React, { useRef, useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaUpload,
  FaWindowClose,
} from "react-icons/fa";
import postData from "../../assets/postData";
import Posting from "./Posting";
import "./Posts.css";

const UserProfile = ({
  name,
  image,
  answers,
  id }) => {
  return (
    <Stack id={id + "-post-header-div"} className="homepage_posts_post-header-div" direction={"row"}>
      <Stack id={"user-profile" + id} className="homepage_posts_user-profile" direction={"row"}>
        <img
          id={"imageOfPost" + id}
          src={image}
          alt={name}
          className="homepage_posts_user-image"
        />
        <span id={"userNameofPost" + id} className="homepage_posts_user-name">
          {name}
        </span>
      </Stack>
      <Stack id={"post-answerOf-post" + id} className="homepage_posts_post-answers">
        <span>{answers} answers</span>
      </Stack>
    </Stack>
  );
};

const NotificationPopup = ({ onClose }) => {
  return (
    <Stack
      id="notification-popup-div"
      className="homepage_posts_notification-popup">
      <Typography variant="body-1" id="notification-thanks-text">
        Thank you for your answer!
      </Typography>
      <Button
        id="notification-close-button"
        className="homepage_posts_notification-close-button"
        onClick={onClose}
      >
        <FaWindowClose />
      </Button>
    </Stack>
  );
};

const Post = ({
  user,
  question,
  content,
  answers,
  upvotes,
  id,
  answersList,
  isAnswerBoxOpen,
  handleOpenClose,
  isReadMoreOpened,
  handleReadMoreOpenAccordion,
}) => {
  const [upvote, setUpvote] = useState(upvotes);
  const [isVoted, setIsVoted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isAnswerPostButtonDisabled, setIsAnswerPostButtonDisabled] =
    useState(true);
  const [answer, setAnswer] = useState(() => {
    const Answers = answersList.filter((answer) => answer.UserName === "John Doe");
    if (Answers.length != 0) {
      return Answers[0]["Answer"]
    }
    else {
      return ""
    }
  })
  const answerArea = useRef(null);

  const handleAnswerPosting = () => {
    setShowNotification(true);
    if (answerArea.current.value != "") {
      setAnswer((prev) => {
        prev, {
          UserName: "John Doe",
          Answer: answerArea.current.value
        }
      });
    }
  };

  const voteUp = () => {
    if (!isVoted) {
      setUpvote(upvote + 1);
      setIsVoted(true);
    }
  };

  const voteDown = () => {
    if (!isVoted) {
      setUpvote(upvote - 1);
      setIsVoted(true);
    }
  };

  const style_property = {
    boxShadow: `
    0px -10px 2px rgba(255, 255, 255, 0.33),
    0px -20px 4px rgba(255, 255, 255, 0.3),
    0px -30px 6px rgba(255, 255, 255, 0.27),
    0px -40px 8px rgba(255, 255, 255, 0.24),
    0px -50px 10px rgba(255, 255, 255, 0.21),
    0px -60px 12px rgba(255, 255, 255, 0.18),
    0px -70px 14px rgba(255, 255, 255, 0.15),
    0px -80px 16px rgba(255, 255, 255, 0.12),
    0px -90px 18px rgba(255, 255, 255, 0.09),
    0px -100px 20px rgba(255, 255, 255, 0.06),
    0px -110px 22px rgba(255, 255, 255, 0.03),
    0px -120px 24px rgba(255, 255, 255, 0);
    `,
  };

  return (
    <>
      <Stack
        id={"post" + id}
        className="homepage_posts_post"
        style={
          isReadMoreOpened ? { height: "fit-content" } : { maxHeight: "300px" }
        }
      >
        <UserProfile
          name={user.name}
          image={user.image}
          answers={isAnswered ? answers + 1 : answers}
          id={id}
        />
        <Typography
          variant="h6"
          sx={{fontWeight:"bolder"}}
          id={"questionOfPost" + id}
          className="homepage_posts_post-question"
        >
          {"Q) " + question}
        </Typography>
        <p
          id={"contentOfPost" + id}
          className="homepage_posts_post-content">
          {!isAnswerBoxOpen ? content : ""}
        </p>
        <Stack
          id={"footerOfPost" + id}
          className="homepage_posts_post-footer"
          direction={"row"}
          style={
            !isReadMoreOpened && !isAnswerBoxOpen
              ? { style_property }
              : { boxShadow: "none" }
          }
        >
          <Stack
            id={"votesOfPost" + id}
            className="homepage_posts_post-votes"
            direction={"row"}>
            <FaAngleUp
              style={
                {
                  color: "rgba(0,0,0,0.8)",
                  fontSize: "2rem"
                }}
              onClick={voteUp}
            />
            <Typography variant="body-1" id={"upvoteValueOfPost" + id}>{upvote}</Typography>
            <FaAngleDown
              style={
                {
                  color: "rgba(0,0,0,0.8)",
                  fontSize: "2rem"
                }}
              onClick={voteDown}
            />
          </Stack>
          {!isAnswered && (
            <Button
              variant="outlined"
              sx={{backgroundColor:"#afafaf", color:"black", fontWeight:"bolder"}}
              id={"answerButtonOfPost" + id}
              className="homepage_posts_answer-button"
              onClick={() => handleOpenClose(id)}
            >
              {isAnswerBoxOpen ? "Close" : "Answer"}
            </Button>
          )}

          {!isAnswerBoxOpen && <button
            id={"showMorePost" + id}
            className="homepage_posts_show_more_button"
            onClick={() => handleReadMoreOpenAccordion(id)}
          >
            {isReadMoreOpened ? "Contract" : "Expand"}
            {!isReadMoreOpened ? (
              <FaAngleDown
                style={
                  {
                    color: "rgba(0, 0, 0, 0.67)",
                    fontSize: "1.5rem"
                  }}
              />
            ) : (
              <FaAngleUp
                style={
                  {
                    color: "rgba(0, 0, 0, 0.67)",
                    fontSize: "1.5rem"
                  }}
              />
            )}
          </button>}
        </Stack>
      </Stack>
      {isAnswerBoxOpen && !isAnswered && (
        <Stack
          id={"Answer" + id}
          className="homepage_posts_Answer">
          <label htmlFor="text-area"></label>
          <textarea
            ref={answerArea}
            id={"text-area" + id}
            className="homepage_posts_textArea"
            autoFocus
            placeholder="Write Your Answer..."
            defaultValue={answer ? answer : ""}
            style={{ width: "100%" }}
            onChange={(event) => {
              if (event.target.value.length === 0) {
                setIsAnswerPostButtonDisabled(true);
              } else {
                setIsAnswerPostButtonDisabled(false);
              }
            }}
          />
          <button
            id={"answerPostButtonOfPost" + id}
            className="homepage_posts_Submit"
            onClick={handleAnswerPosting}
            {...(isAnswerPostButtonDisabled
              ? { disabled: true }
              : { disabled: false })}
          >
            Post
            <FaUpload></FaUpload>
          </button>
          {showNotification && (
            <NotificationPopup
              onClose={() => {
                setShowNotification(false);
                handleOpenClose(false);
                setIsAnswered(true);
              }}
            />
          )}
        </Stack>
      )}
    </>
  );
};

const Posts = () => {
  const [openPostId, setOpenPostId] = useState(null);
  const [openPostIdForRead, setOpenPostIdForRead] = useState(null);

  const handleOpenClose = (postId) => {
    if (openPostId === postId) {
      setOpenPostId(null);
    } else {
      setOpenPostId(postId);
    }
  };

  const handleReadMoreOpenAccordion = (postId) => {
    if (openPostIdForRead === postId) {
      setOpenPostIdForRead(null);
    } else {
      setOpenPostIdForRead(postId);
    }
  };

  return (
    <Stack id="posts">
      <Posting />
      <Typography variant="h1" id="label_of_top_picks" style={{ marginLeft: "15px" }}>
        Top Picks of Today
      </Typography>
      {postData.map((postContent) => (
        <Post
          key={postContent.id}
          {...postContent}
          isAnswerBoxOpen={openPostId === postContent.id}
          handleOpenClose={handleOpenClose}
          isReadMoreOpened={openPostIdForRead === postContent.id}
          handleReadMoreOpenAccordion={handleReadMoreOpenAccordion}
        />
      ))}
    </Stack>
  );
};

export default Posts;
