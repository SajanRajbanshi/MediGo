import React from "react";
import Dashboard from "../../Components/SideBarOfHome/HomeLeftSideBar";
import Posts from "../../Components/Post_Component/Posts";
import HomeRightSideBar from "../../Components/SideBarOfHome/HomeRightSideBar";
import { Stack } from "@mui/material"

export default function Home() {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-evenly"}
    >
      <Dashboard />
      <Posts />
      <HomeRightSideBar />
    </Stack>
  );
}
