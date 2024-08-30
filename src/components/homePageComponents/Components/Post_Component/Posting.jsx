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
      className="homepage_posting_container"
      id="postingContainer"
      direction={"row"}
    >
      <Stack
        className="homepage_posting_profileContainer"
        id="profileContainer">
        <img
          src="https://images.unsplash.com/photo-1539667468225-eebb663053e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D"
          alt="User Profile"
          className="homepage_posting_profileImage"
        />
      </Stack>
      <label
        id="labelOfPostQuestiion"
        htmlFor="Post_Question"></label>
      <Stack
        id="messageContainer"
        className="homepage_posting_messageContainer">
        <input
          className="homepage_posting_messageText"
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
          className="homepage_posting_post-button">POST</button>
      </Stack>
    </Stack>
  );
};

export default MessageComponent;
