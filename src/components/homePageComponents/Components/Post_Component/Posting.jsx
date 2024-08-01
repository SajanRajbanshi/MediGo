import React, { useRef } from "react";
import "./Posting.css";
import { Stack } from "@mui/material"
import axios from "axios"

const MessageComponent = () => {
  const queInput = useRef()
  const handlePosting = ()=>{
    const que = queInput.current.value;
    axios.post("http://localhost:30303/api/post/create").
    console.log(que)

    queInput.current.value = null
  }
  return (
    <Stack
      className="container"
      id="postingContainer"
      direction={"row"}
    >
      <Stack
        className="profileContainer"
        id="profileContainer">
        <img
          //   src="src/assets/img/1.jpg"
          src="https://images.unsplash.com/photo-1539667468225-eebb663053e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D"
          alt="User Profile"
          className="profileImage"
        />
      </Stack>
      <label
        id="labelOfPostQuestiion"
        htmlFor="Post_Question"></label>
      <Stack
        id="messageContainer"
        className="messageContainer">
        <input
          className="messageText"
          type="text-area"
          ref={queInput}
          placeholder="How do you feel today?"
          name="Post_Question"
          id="Post_Question"
        />
      </Stack>
      <Stack
        id="postButtonContainer"
        className="post-button-container">
        <button
          id="postButton"
          onClick={handlePosting}
          className="post-button">POST</button>
      </Stack>
    </Stack>
  );
};

export default MessageComponent;
