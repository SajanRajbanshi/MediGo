import React from "react";
import "./Title.css";
import {Stack, Typography} from "@mui/material"

export default function Title() {
  return (
    <Stack
      direction={"row"}
      id="title-div"
      className="title"
      title="MediGo"
    >
      <Typography
        variant="body-1"
        id="Medi"
        className="c1"
      >
        Medi
      </Typography>
      <Typography
        variant="body-1"
        id="Go"
        className="c2"
      >
        Go
      </Typography>
    </Stack>
  );
}
