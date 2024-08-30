import React, { useState } from "react";
import PopularHospital from "../PopularHospital_Component/PopularHospital";
import Grid from "../RecentSearch_Component/Grid";
import "./SearchHospitals.css";
import { Typography } from "@mui/material"
import { useSelector } from "react-redux";

export default function SearchHospitals() {
  let cardData = useSelector((state) => state.cardData.value)
  const [recentCardDatas, setRecentCardDatas] = useState([])

  return (
    <main
      id="homepage_searchHospital_main"
      className="homepage_searchHospital_main"
    >
      <Typography
        variant="h6"
        id="homepage_searchHospital_popular_Hospitals_Title"
        title="Popular Hospitals"
        sx={{ fontWeight: "bold" }}
      >
        Popular Hospitals
      </Typography>
      <PopularHospital />
      <Typography
        variant="h6"
        id="homepage_searchHospital_Recent_Search"
        sx={{ fontWeight: "bold" }}
      >
        Recent Search
      </Typography>
      {Object.keys(cardData).length !== 0 &&
        <Grid
          prevdata={recentCardDatas}
          cardData={cardData}
        />}
    </main>
  );
}
