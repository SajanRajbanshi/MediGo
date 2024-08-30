import React from "react";
import "./HomeLeftSideBar.css";
import { BsFillThreadsFill, BsActivity } from "react-icons/bs";
import { MdNotificationsActive, MdCalendarMonth } from "react-icons/md";
import {Stack,Typography} from "@mui/material"

const Dashboard = () => {
  const options = [
    {
      id: 1,
      Title: "Notifications",
      iconImage: <MdNotificationsActive />,
    },
    {
      id: 2,
      Title: "Your Threads",
      iconImage: <BsFillThreadsFill />,
    },
    {
      id: 3,
      Title: "Activities",
      iconImage: <BsActivity />,
    },
    {
      id: 4,
      Title: "Appointments",
      iconImage: <MdCalendarMonth />,
    },
  ];
  return (
    <Stack
      id="dashboard-div"
      className="homepage_homeLeft_dashboard">
      <Stack
        direction={"row"}
        id="dashboard-header-div"
        className="homepage_homeLeft_DashBoardheader">
        <img
          id="user-profile-picture"
          src="https://images.unsplash.com/photo-1539667468225-eebb663053e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D"
          alt="Profile"
          className="homepage_homeLeft_profile-picture"
        />
        <Typography
          variant="body-2"
          id="username"
          className="homepage_homeLeft_username"
        >
          John Doe
        </Typography>
      </Stack>
      <Stack
        id="leftHomeMenu"
        className="homepage_homeLeft_leftHomeMenu">
        {options.map((items) => (
          <Stack
            direction={"row"}
            id={"OptionDivOf" + items.id}
            key={items.id}
            className="homepage_homeLeft_leftHomeMenu-item">
            {items.Title}
            <Typography
              variant="body-2"
              id={"optionImageSpanOf" + items.id}
              role="img"
              aria-label={items.Title}>
              {items.iconImage}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <button
        id="get-medicine-button"
        className="homepage_homeLeft_get-medicine-button"
      >
        Get Medicine
      </button>
    </Stack>
  );
};

export default Dashboard;
