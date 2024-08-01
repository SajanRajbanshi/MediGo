import React from "react";
import "./HomeRightSideBar.css";
import { FaHospital, FaStar } from "react-icons/fa6";
import{Stack, Typography} from "@mui/material"

const HospitalItem = ({
  id,
  name,
  rating }) => (
  <Stack
    direction={"row"}
    id={id + "hospitalItem"}
    className="homeRightSideBar-hospitalItem">
    <Typography
      variant="body-1"
      id={id + "span"}
      className="HospitalName"
      >
      {name}
    </Typography>
    <Typography
      variant="bdy-1"
      id={id + "-rating"}
      className="homeRightSideBar-rating">
      <Typography
        variant="body-1"
        id="star-span"
        className="star_span">
        <FaStar style={
          { color: "rgba(255,225,25,1)" }
        } />
      </Typography>
      {rating}
    </Typography>
  </Stack>
);

const Section = ({
  title,
  hospitals }) => (
  <>
    <Typography
      variant="h6"
      id={title + "-section-title"}
      className="homeRightSideBar-section-title"
    >
      {title}
      <FaHospital />
    </Typography>
    <Stack
      key={title}
      id={title + "-section"}
      className="homeRightSideBar-section">
      {hospitals.map((h) => (
        <HospitalItem
          key={h.id}
          name={h.name}
          rating={h.rating} />
      ))}
      <button
        id={title + "-section-button"}
        className="homeRightSideBar-section-button"
      >
        See more
      </button>
    </Stack>
  </>
);

const HomeRightSideComponent = () => {
  const popularHospitals = [
    {
      id: 1,
      name: "Indus Hospital",
      rating: "4.5/5"
    },
    {
      id: 2,
      name: "Varad Hospital Critical Care",
      rating: "4.5/5"
    },
    {
      id: 3,
      name: "Medicure Multi Speciality Hospital",
      rating: "4.4/5"
    },
  ];

  const recentHospitals = [
    {
      id: 1,
      name: "Shivam Hospital",
      rating: "4.1/5"
    },
    {
      id: 2,
      name: "Pragathi Speciality Hospital",
      rating: "4.0/5"
    },
    {
      id: 3,
      name: "Omega Bhimavaram Hospitals Unit Of Bhimavaram Institute Of Oncology Pvt Ltd",
      rating: "3.75/5"
    },
  ];

  return (
    <Stack
      id="home-rightside-container-div"
      className="homeRightSideBar-container">
      <button
        id="emergency_button"
        className="homeRightSideBar-emergencyButton"
      >
        Emergency
      </button>
      <Section title={"Popular in your Area"} hospitals={popularHospitals} />
      <Section title="Your recent searches" hospitals={recentHospitals} />

    </Stack>
  );
};

export default HomeRightSideComponent;
