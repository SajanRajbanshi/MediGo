import React from "react";
import "./Title.css";
import {Stack, Typography} from "@mui/material"
import { useNavigate } from "react-router-dom";

export default function Title() {
  const navigate = useNavigate();
  return (
    <Stack
      direction={"row"}
      id="title-div"
      className="homepage_web_title"
      title="MediGo"
      onClick={()=>navigate("/home")}
    >
      <Typography
        variant="body-1"
        id="Medi"
        className="homepage_web_c1"
      >
        Medi
      </Typography>
      <Typography
        variant="body-1"
        id="Go"
        className="homepage_web_c2"
      >
        Go
      </Typography>
    </Stack>
  );
}
