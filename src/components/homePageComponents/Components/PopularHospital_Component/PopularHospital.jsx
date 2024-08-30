import React, { useState, useEffect, useRef } from "react";
import { Grid, Container } from "@mui/material";
import HospitalCard from "../Card_Component/Card";
import fetchedData from "../../assets/jsonData";

const PopularHospital = () => {
  const [filteredData, setFilteredData] = useState([]);
  const popular_hospital = useRef(null);

  useEffect(() => {
    const getRandomIndices = (dataLength, numItems) => {
      const indices = [];
      while (indices.length < numItems) {
        const randomIndex = Math.floor(Math.random() * dataLength);
        if (!indices.includes(randomIndex)) {
          indices.push(randomIndex);
        }
      }
      return indices;
    };

    const fetchData = async () => {
      setFilteredData(
        getRandomIndices(fetchedData.length, 8).map(
          (index) => fetchedData[index]
        )
      );
    };
    fetchData();
  }, []);

  return (
    <Container
      maxWidth="100%"
      ref={popular_hospital}
      id="popular_hospital"
    >
      <Grid container spacing={4}>
        {filteredData.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <HospitalCard key={item.id} Hospital_Detail={item} requested={false} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PopularHospital;
