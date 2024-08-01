import React, { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import Title from "../Title_Component/Title";
import "./Header.css";
import { Stack, Button } from "@mui/material"
import NavBar from "../Navbar/NavBar";
import DrawerComponent from "../Drawer_Component/Drawer";
import CloseIcon from "../../assets/CloseIcon";
import MenuIcon from "../../assets/MenuIcon";
import { useSelector } from "react-redux"

const Header = () => {
  const [open, setOpen] = useState(false)
  const width = useSelector((state) => state.windowChange.value)
  return (
    <header id="header">
      <Stack direction={"row"}
        alignItems="center">
        {width <= 975 ? (<>
          <Button
            sx={{ height: "inherit", minWidth:"max-content" }}
            onClick={() => setOpen(true)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </Button>
          <DrawerComponent open={open} onClose={() => setOpen(false)} /></>) : null}
        <Title />
      </Stack>
      <NavBar />
      <Stack
        id="profile"
        className="profile_user"
        title="Profile">
        <IoPersonCircleOutline
          style={
            {
              width: "30px",
              height: "30px"
            }
          } />
      </Stack>
    </header>
  );
};

export default Header;
